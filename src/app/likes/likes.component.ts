import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  @Input() readonly: boolean = false;
  @Input() like: boolean = false;
  @Input() postId: string;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $(function() {
      $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
      });
    });
  }

  likeDislike() {
    if (this.readonly) return;
  }
}

export interface LikeClickedEvent {
  postId: string;
  like: boolean;
}
