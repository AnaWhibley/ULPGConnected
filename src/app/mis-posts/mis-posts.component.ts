import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-mis-posts',
  templateUrl: './mis-posts.component.html',
  styleUrls: ['./mis-posts.component.scss']
})
export class MisPostsComponent implements OnInit {

  me: any;
  subs: Subscription;
  subs2: Subscription;
  subs3: Subscription;


  myPosts = [];

  constructor(  private authService: AuthService,
                private postService: PostService) { }

  ngOnInit() {

    this.subs = this.authService.userStatusChanges
    .subscribe( userDetails => {
      this.me = userDetails;
    });

    this.subs2 = this.postService.posts.subscribe( (data: any) => {
      //this.myPosts = data.filter( post => post.userId === this.me.id);
    });

    this.subs3 = this.postService.getPostByUserId2(this.me.id)
    .subscribe((data: any) => {
      this.myPosts = data;
      //console.log('probando ',data);
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
  }
}
