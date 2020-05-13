import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import {Router} from '@angular/router';
import {LikeClickedEvent} from './likes/likes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ulpgconnected';
  logued: boolean = false;
  values : Map<string, boolean> = new Map();

  constructor (private authService: AuthService, private router: Router){}

   ngOnInit(){
      this.authService.userStatusChanges
            .subscribe( userDetails => {
              this.logued = !!userDetails;
              console.log('Alguien ha hecho log?', userDetails, !!userDetails);
              this.router.navigate(['']);
            });
   }

  handleEvent(event: LikeClickedEvent){
    this.values.set(event.postId, event.like);
  }
}
