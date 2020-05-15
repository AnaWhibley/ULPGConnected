import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {LikeClickedEvent} from '../likes/likes.component';
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
  values : Map<string, boolean> = new Map();

  constructor( private router: Router, private userService: UserService,
               private likeService: LikeService) { }

  ngOnInit() {
   this.userService.getUserByEmail(this.post.email).subscribe((user)=>{
     this.user = {...user};
   });
    this.likeService.getLikesByPostId(this.post.id).subscribe( (data) =>{
      this.likes = data;
    });

  }
  goToDetails(id){
    id ? this.router.navigate(['/post-details', id]) : "";
  }

  handleEvent(event: LikeClickedEvent){
    console.log("!!!!!!!! click");
    this.values.set(event.postId, event.like);
  }

  //usando el método del servicio traer los likes de un post, tiene dentro un array con los id de las personas que le han dado me gusta,
  // hay que añadir a ese array el user que le dio like o quitarlo

}
