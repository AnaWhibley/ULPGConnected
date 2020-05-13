import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {PostService} from "../services/post.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private post;
  private postId;
  private currentUser;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute,
              private postService: PostService, private authService: AuthService){ }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.postId = String(params['id']);
    });
    this.postService.getPostByUserId(this.postId).subscribe((post) => {
      this.post = post;
    });
    this.currentUser = this.authService.getCurrentUser();
  }

  deletePost(){
    if(this.currentUser.id === this.post.userId || this.currentUser.role === 1) {
      this.postService.deletePost(this.post.propertyId);
      this._router.navigate(['/home']);
    }
  }
}
