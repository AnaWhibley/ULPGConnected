import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ulpgconnected';
  logued: boolean = false;


  appLogin(){
    this.logued = true;
  }

  appLogout(){
    this.logued = false;
  } 
}
