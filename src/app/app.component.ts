import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ulpgconnected';
  logued: boolean = false;

  constructor() {}

  appLogin(){
    this.logued = true;
  }

  appLogout(){
    this.logued = false;
  } 
}
