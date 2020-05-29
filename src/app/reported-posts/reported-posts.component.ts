import {Component, NgZone, OnInit} from '@angular/core';
import {ReportService} from '../services/report.service';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MatDialog} from '@angular/material';
import {DeleteReportedPostDialogComponent} from './delete-reported-post-dialog/delete-reported-post-dialog.component';
import {CheckedReportedPostDialogComponent} from './checked-reported-post-dialog/checked-reported-post-dialog.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.scss']
})
export class ReportedPostsComponent implements OnInit {

  private reports : any;
  private postsReported : Array<any> = [];
  private loguedUser: any;
  private aux: boolean;

  constructor( private reportService: ReportService,
               private postService: PostService,
               private router: Router,
               private authService: AuthService,
               public dialog: MatDialog) { }

  ngOnInit() {
    this.reportService.reports.subscribe(reports => {
      this.reports = reports;
      console.log("!!!!!", this.reports);
      this.postsReported = [];
      this.reports.forEach(report => {
        this.postService.getPostById(report.postId).pipe(take(1)).subscribe( element => {
          this.postsReported.push({
            ...element,
            reportPropertyId: report.propertyId,
          });
            console.log(":)))))))))))", this.postsReported);
          }
        );
      });
    });

    this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.loguedUser = userDetails;
      });
  }

  deletePost(propertyId: string, reportId: string) {
    const deleteReport = () => this.reportService.deleteReport(reportId, showDialog);
    const showDialog = () => {
      this.dialog.open(DeleteReportedPostDialogComponent);
    };
    this.postService.deletePost(propertyId, deleteReport);
  }

  checkPost(reportId: string) {
    const showDialog = () => {
      this.dialog.open(CheckedReportedPostDialogComponent);
    };
    this.reportService.deleteReport(reportId, showDialog);
  }
}
