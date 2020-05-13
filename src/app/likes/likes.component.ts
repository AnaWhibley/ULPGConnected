import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  @Input() readonly: boolean = false;
  @Input() like: boolean;
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

  likeDislike(like) {
    if (this.readonly) return;
    this.like = like;
    this.childEvent.emit({
      postId: "",
      like: this.like
    });
  }
}

export interface LikeClickedEvent {
  postId: string;
  like: boolean;
}
