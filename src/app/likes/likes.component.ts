import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {


  @Input() readonly: boolean = false;
  private clicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    this.clicked = !this.clicked;
  }

}
