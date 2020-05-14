import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {PostService} from "../services/post.service";
import {AuthService} from "../services/auth.service";
import {LikeService} from "../services/like.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private post: any;
  private postId: any;
  private currentUser: any;
  private likes: any;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute,
              private postService: PostService, private authService: AuthService,
              private likeService: LikeService){ }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.postId = String(params['id']);
    });
    this.postId ? this.postService.getPostByUserId(this.postId).subscribe((post) => {
      this.post = post;
    }) : this.post = {};
    this.currentUser = this.authService.getCurrentUser();
    this.post && this.post.hasOwnProperty('id') ? this.likes = this.likeService.getLikesByPostId(this.post.id) : null;
  }

  deletePost(){
    if(this.currentUser.id === this.post.userId || this.currentUser.role === 1) {
      this.postService.deletePost(this.post.propertyId);
      this._router.navigate(['/home']);
    }
  }
}
