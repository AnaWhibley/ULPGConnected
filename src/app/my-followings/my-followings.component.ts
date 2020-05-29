import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {UserService} from "../services/user.service";

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
  private loguedUser: any;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {
    this.nFollowing = 0;
  }

  ngOnInit() {
    this.subs = this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.followings = [];
        this.me = userDetails;
        this.nFollowing = this.me.following.length;
        this.me.following.forEach(following => {
          this.userService.getUserByOtherId(following).subscribe((userData) => {
            this.followings.push(userData);
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
