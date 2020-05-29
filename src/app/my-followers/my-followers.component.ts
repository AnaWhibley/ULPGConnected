import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {UserService} from "../services/user.service";

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
  private loguedUser: any;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {
    this.nFollowers = 0;
  }

  ngOnInit() {

    this.subs = this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.followers = [];
        this.me = userDetails;
        this.nFollowers = this.me.followers.length;
        this.me.followers.forEach(follower => {
          this.userService.getUserByOtherId(follower).subscribe((userData) => {
            this.followers.push(userData);
          })
        });
      });

    this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.loguedUser = userDetails;
      });
  }

  goToUserDetails(userId: string) {

    if (userId == this.loguedUser.id){
      this.router.navigate(['/me']);
    } else {
      userId ? this.router.navigate(['/user-info', userId]) : "";
    }
  }
}
