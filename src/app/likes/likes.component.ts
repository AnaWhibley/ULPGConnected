import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {LikeService} from '../services/like.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  @Input() propertyId: string;
  @Input() userId: string;
  @Input() postId: string;

  private isLiked : boolean;
  private showAnimation: boolean;

  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.likeService.isSelected(this.postId, this.userId).pipe(take(1)).subscribe((data)=> {
      this.showAnimation = false;
      this.isLiked = !!data;
    });
  }

  likeDislike() {
    this.likeService.isSelected(this.postId, this.userId).pipe(take(1)).subscribe((data)=> {
      this.showAnimation = true;
      if (data) {
        this.isLiked = false;
        this.likeService.removeLike(this.propertyId, this.userId);
      }else{
        this.isLiked = true;
        this.likeService.addLike(this.propertyId, this.userId);
      }
    });
  }
}
