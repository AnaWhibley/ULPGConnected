import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit, OnDestroy {

  me: any;
  subs: Subscription;
  subs2: Subscription;
  subs3: Subscription;
  subs4: Subscription;
  userId: string;
  myPropertyId: string;
  userInfo: any;
  userPosts = [];
  change = true;
  following = false;
  
  constructor(private authService: AuthService,
              private userService: UserService,
              public _route: ActivatedRoute,
              public router: Router,
              public postService: PostService) { }



  ngOnInit() {
    this._route.params.subscribe(params => {
      this.userId = String(params['id']);
    });

    this.subs = this.authService.userStatusChanges
    .subscribe( userDetails => {
      this.me = userDetails;
    });

    this.subs2 = this.userService.getUserByOtherId(this.userId)
    .subscribe( user => {
      // aquí podemos sacar propertyId
      this.userInfo = user;
    });

    this.subs3 = this.userService.getUserByOtherId(this.me.id)
    .subscribe( user => {
      this.myPropertyId = user.propertyId;
    });

    this.subs4 = this.postService.getPostByUserId2(this.userId)
    .subscribe((data: any) => {
      this.userPosts = data;
    })

    console.log('Ignoren el fallo que sale en consola');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
    this.subs4.unsubscribe();
  }

  viewPosts(){
    this.change = !this.change
  }

  follow(){
    this.following = true;
  }
  
  unfollow(){
    this.following = false;
  }


}
