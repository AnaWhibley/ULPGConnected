import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authError: any;
  info: any;
  user = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });

  }

  signUp() {
    console.log(this.user)
      this.auth.signUp(this.user.name,this.user.surname,this.user.username,
        this.user.email, this.user.password);
  }

}
