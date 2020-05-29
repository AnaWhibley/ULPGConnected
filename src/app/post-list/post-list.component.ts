import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {AuthService} from "../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  filteredPosts: Array <any>;
  allPosts: Array <any>;
  posts: Array <any>;
  user: String;
  checked: Boolean;
  currentUser: any;
  searchText: String = "";
  followedUsers: Array <any> =  [];
  constructor(private router: Router, private postService: PostService, private authService: AuthService) { }

  ngOnInit() {
    this.postService.posts.subscribe((posts: any) => {
      this.posts = posts;
      this.allPosts = posts;
      this.filteredPosts = posts;
    });
    this.currentUser = this.authService.getCurrentUser();
    this.currentUser.following.forEach(id =>
    this.followedUsers.push(id));
  }
  createPost(){
    this.router.navigate(['/postCreate']);
  }
  aux(user){
    this.searchText = user.viewModel;
    this.searchUser()
  }
  searchUser(){
    this.filteredPosts = this.allPosts;
    let data = this.searchText
      if(this.checked) {
        this.check();
    }
    if(data && data !== ' '){
      let posts;
      posts = this.filteredPosts.filter((post) => {
        return post.userName === data || post.email === data || post.fullName === data || post.date === data;
      });
      this.filteredPosts = posts;
    }

  }
  changeFeed(evt){
    this.checked = evt.checked;
    if(this.checked){
      this.check();
    }else{
      this.searchUser();
    }
  }
  check(){
    let posts;
    posts = this.filteredPosts.filter(post => this.followedUsers.includes(post.userId));
    this.filteredPosts = posts;
  }
}
