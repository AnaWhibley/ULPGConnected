import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private post;
  private postId;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute,
              private postService: PostService){ }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.postId = String(params['id']);
    });
    this.postService.getPostByUserId(this.postId).subscribe((post) => {
      this.post = post;
    });
  }

  deletePost(){

  }
}
