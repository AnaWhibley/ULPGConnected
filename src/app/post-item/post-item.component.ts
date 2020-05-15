import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {LikeService} from "../services/like.service";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  private user: any;
  private likes: any;
  @Input() post;
  private loguedUser: string;

  constructor( private router: Router, private userService: UserService,
               private likeService: LikeService, private authService: AuthService) { }

  ngOnInit() {
   this.userService.getUserByEmail(this.post.email).subscribe((user)=>{
     this.user = {...user};
   });
    this.likeService.getLikesByPostId(this.post.id).subscribe( (data) =>{
      this.likes = data;
    });
    this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.loguedUser = userDetails;
      });
  }
  goToDetails(id){
    id ? this.router.navigate(['/post-details', id]) : "";
  }

  //usando el método del servicio traer los likes de un post, tiene dentro un array con los id de las personas que le han dado me gusta,
  // hay que añadir a ese array el user que le dio like o quitarlo
  // usuario actual y property id
}
