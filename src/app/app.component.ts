import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ulpgconnected';
  logued: boolean = false;

  constructor (private authService: AuthService){}

   ngOnInit(){
      this.authService.user$
            .subscribe( log => {
              this.logued = log;
              console.log('Alguien ha hecho log?', this.logued);
            })
   }


}
