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
  allPosts: any;
  user: String;
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postService.posts.subscribe((posts: any) => {
      this.posts = posts;
      this.allPosts = posts;
    });
  }
  createPost(){
    this.router.navigate(['/postCreate']);
  }
  searchUser(user){
    const data = user.viewModel;
    if(user.viewModel && user.viewModel !== ' '){
      let posts;
      posts = this.allPosts.filter((post) => {
        return post.userName === data || post.email === data || post.fullName === data || post.date === data;
      });
      this.posts = posts;
    }else{
      this.posts = this.allPosts;
    }
    console.log(this.allPosts);
  }
}
