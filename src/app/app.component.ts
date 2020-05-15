import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ulpgconnected';
  logued: boolean = false;

  constructor (private authService: AuthService, private router: Router){}

   ngOnInit(){
      this.authService.userStatusChanges
            .subscribe( userDetails => {
              this.logued = !!userDetails;
              console.log('Alguien ha hecho log?', userDetails, !!userDetails);
              this.router.navigate(['']);
            });
   }


}
