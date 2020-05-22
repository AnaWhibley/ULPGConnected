import { Component, OnInit } from '@angular/core';
import {PostItemComponent} from "../post-item/post-item.component";
import {PostService} from "../services/post.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any;
  user: String;
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postService.posts.subscribe((posts: any) => {
      this.posts = posts;
    });
  }
  createPost(){
    this.router.navigate(['/postCreate']);
  }
  searchUser(user){
    console.log("Buscar usuario: ", user.viewModel)
  }
}
