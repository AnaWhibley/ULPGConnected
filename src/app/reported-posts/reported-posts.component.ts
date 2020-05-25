import { Component, OnInit } from '@angular/core';
import {ReportService} from '../services/report.service';

@Component({
  selector: 'app-reported-posts',
  templateUrl: './reported-posts.component.html',
  styleUrls: ['./reported-posts.component.scss']
})
export class ReportedPostsComponent implements OnInit {

  private reports : any;

  constructor( private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.reports.subscribe(reports => {
      this.reports =reports;
      console.log(reports);
    });
  }

}
