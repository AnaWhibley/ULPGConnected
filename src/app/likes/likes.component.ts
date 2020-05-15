import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {LikeService} from '../services/like.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  @Input() propertyId: string;
  @Input() userId: string;

  constructor(private likeService: LikeService) {

  }

  ngOnInit() {

  }

  likeDislike() {
    $(function() {
      $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
      });
    });

    this.likeService.addLike(this.propertyId, this.userId);
  }
}
