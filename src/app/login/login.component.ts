import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authError: any;
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  login() {
    this.authService.login(this.user.email, this.user.password);
    this.router.navigate(['home']);
  }



}
