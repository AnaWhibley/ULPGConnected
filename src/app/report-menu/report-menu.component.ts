import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-menu',
  templateUrl: './report-menu.component.html',
  styleUrls: ['./report-menu.component.scss']
})
export class ReportMenuComponent implements OnInit {

  constructor() { }

  @Input() propertyId: string;
  @Input() userId: string;
  @Input() postId: string;

  ngOnInit() {
  }

  reportHandling() {
    console.log("!!!!!", this.userId, " - ", this.postId);
  }
}
