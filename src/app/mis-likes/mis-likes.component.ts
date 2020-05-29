import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-mis-likes',
  templateUrl: './mis-likes.component.html',
  styleUrls: ['./mis-likes.component.scss']
})
export class MisLikesComponent implements OnInit {

  me: any;
  subs: Subscription;
  subs2: Subscription;
  subs3: Subscription;


  myLikes = [];
  allPosts = [];

  constructor(  private authService: AuthService,
                private postService: PostService, 
                private likeService: LikeService) { }

  ngOnInit() {

    this.subs = this.authService.userStatusChanges
    .subscribe( userDetails => {
      this.me = userDetails;
    });

    this.subs2 = this.postService.posts.subscribe( (data: any) => {
      this.allPosts = data;
    });

    this.subs3 = this.likeService.likes
      .subscribe( data => {
        this.transform(data.filter( post => post.likes.includes(this.me.id)));
      });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
  }

  transform( posts: any[] ){
    let ids = [];
    posts.forEach(post => {
      ids.push(post.postId);
    });
    this.myLikes = this.allPosts.filter( post => ids.includes(post.id));
  }

}