import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  hide: boolean = false;
  login: boolean = false;
  signin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showLogin() {
    this.login = true;
    this.hide = true;
  }

  showSignin() {
    this.signin = true;
    this.hide = true;
  }

  comeBack() {
    this.login = false;
    this.hide = false;
    this.signin = false;
  }
}
