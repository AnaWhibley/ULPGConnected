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

  myPosts = [];

  constructor(  private authService: AuthService,
                private postService: PostService) { }

  ngOnInit() {

    this.subs = this.authService.userStatusChanges
    .subscribe( userDetails => {
      this.me = userDetails;
    });

    this.subs2 = this.postService.posts.subscribe( (data: any) => {
      this.myPosts = data.filter( post => post.userId === this.me.id);
      this.prueba();
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
  }

  prueba(){
    if (this.myPosts[0].date > this.myPosts[1].date){
      console.log(this.myPosts[0].date, ' es mayor que ', this.myPosts[1].date);
    } else {
      console.log(this.myPosts[1].date, ' es mayor que ', this.myPosts[0].date);

    }
  }
}
