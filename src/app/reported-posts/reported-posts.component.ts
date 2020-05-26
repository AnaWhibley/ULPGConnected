import { Component, OnInit } from '@angular/core';
import {ReportService} from '../services/report.service';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.scss']
})
export class ReportedPostsComponent implements OnInit {

  private reports : any;
  private postsReported : Array<any> = [];

  constructor( private reportService: ReportService,
               private postService: PostService) { }

  ngOnInit() {
    this.reportService.reports.subscribe(reports => {
      this.reports = reports;
      this.reports.forEach(report => {
        this.postService.getPostById(report.postId).subscribe( element => {
          if (element !== null) {
            this.postsReported.push(element);
            console.log("!!!!!!!",this.postsReported);
          }
          }
        );
      });
    });
  }

}
