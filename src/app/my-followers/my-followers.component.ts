import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.scss']
})
export class MyFollowersComponent implements OnInit {

  me: any;
  subs: Subscription;
  nFollowers: number;
  followers = [];

  constructor(private authService: AuthService) {
    this.nFollowers = 0;
  }

  ngOnInit() {

    this.subs = this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.me = userDetails;
        this.nFollowers = this.me.followers.length;
        this.followers = this.me.followers;
      });
  }
}
