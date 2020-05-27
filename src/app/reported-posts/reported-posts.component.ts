import {Component, NgZone, OnInit} from '@angular/core';
import {ReportService} from '../services/report.service';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MatDialog} from '@angular/material';
import {DeleteReportedPostDialogComponent} from './delete-reported-post-dialog/delete-reported-post-dialog.component';

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
      this.reports.forEach(report => {
        this.postService.getPostById(report.postId).subscribe( element => {
          if (element !== undefined) {
            this.postsReported.push(element);
          }
          }
        );
      });
    });

    this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.loguedUser = userDetails;
      });
  }

  deletePost(propertyId: string) {
    this.postService.deletePost(propertyId);
    this.dialog.open(DeleteReportedPostDialogComponent);
    this.router.navigate(['/home']);
  }
}
