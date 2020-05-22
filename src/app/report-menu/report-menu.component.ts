import {Component, Input, OnInit} from '@angular/core';
import {ReportService} from '../services/report.service';
import {MatDialog} from '@angular/material';
import {ReportDialogComponent} from '../report-dialog/report-dialog.component';

@Component({
  selector: 'app-report-menu',
  templateUrl: './report-menu.component.html',
  styleUrls: ['./report-menu.component.scss']
})
export class ReportMenuComponent implements OnInit {

  constructor(private reportService: ReportService,
              public dialog: MatDialog) { }

  @Input() userId: string;
  @Input() postId: string;

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ReportDialogComponent);
  }
  reportHandling() {
    this.reportService.updateReport(this.postId, this.userId);
    //console.log("!!!!!", this.userId, " - ", this.postId);
    this.openDialog();
  }
}
