import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor(private authservice: AuthService) { }
  
  ngOnInit() {

    this.user = this.authservice.currentUser
    
  }

  logout(){
    this.authservice.logOut();
  }


}
