import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-followings',
  templateUrl: './my-followings.component.html',
  styleUrls: ['./my-followings.component.scss']
})
export class MyFollowingsComponent implements OnInit {

  me: any;
  subs: Subscription;
  nFollowing: number;
  followings = [];

  constructor(private authService: AuthService) {
    this.nFollowing = 0;
  }

  ngOnInit() {

    this.subs = this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.me = userDetails;
        this.nFollowing = this.me.following.length;
        this.followings = this.me.following;
        console.log("!!", this.me, );
        console.log("followings!!", this.followings);
      });
  }
}
