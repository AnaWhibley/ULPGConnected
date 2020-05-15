import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  @Input() like: boolean;
  @Input() postId: string;
  @Input() userId: string;
  @Output() public childEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  likeDislike(like) {
    $(function() {
      $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
      });
    });
    this.like = like;
    console.log("!!!!!!!! emit");
    this.childEvent.emit({
      postId: this.postId,
      like: this.like
    });
  }
}

export interface LikeClickedEvent {
  postId: string;
  like: boolean;
}
