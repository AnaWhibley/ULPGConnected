import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  private user: any;
  private mList: any;
  private date: String;
  @Input() post;
  constructor( private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    /*
    this.mList = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    this.date = String(this.post.date.getDay() + " " + this.mList[this.post.date.getMonth()]);
     */
  }
  goToDetails(){
    this.router.navigate(['/details', this.post.id]);
  }

}
