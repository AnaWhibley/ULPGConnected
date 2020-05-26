import { Component, OnInit } from '@angular/core';
import {ReportService} from '../services/report.service';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.scss']
})
export class ReportedPostsComponent implements OnInit {

  private reports : any;
  private postsReported : Array<any> = [];
  private loguedUser: any;


  constructor( private reportService: ReportService,
               private postService: PostService,
               private router: Router,
               private authService: AuthService) { }

  ngOnInit() {
    this.reportService.reports.subscribe(reports => {
      this.reports = reports;
      this.reports.forEach(report => {
        this.postService.getPostById(report.postId).subscribe( element => {
          if (element !== undefined) {
            this.postsReported.push(element);
            console.log(this.postsReported);
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

  goToDetails(id){
    id ? this.router.navigate(['/post-details', id]) : "";
  }

  goToUserDetails(userId: string){

    if (userId == this.loguedUser.id){
      this.router.navigate(['/me']);
    } else {
      userId ? this.router.navigate(['/user-info', userId]) : "";
    }
  }

}
