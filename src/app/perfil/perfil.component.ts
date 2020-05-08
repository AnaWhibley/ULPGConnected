import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit, OnDestroy {

  me: any;
  subs: Subscription;
  subs2: Subscription;

  myId: string;
  change = false;

  constructor( private authService: AuthService,
    private userService: UserService) { }


  ngOnInit() {
    this.subs = this.authService.userStatusChanges
      .subscribe( userDetails => {
        this.me = userDetails;
    });
    this.subs2 = this.userService.getUserByName(this.me.name)
      .subscribe( data => {
        this.myId = data.propertyId;
      });
  }

  // Quitando subscripcion
  ngOnDestroy(){
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
  }

  modMisDatos(){
    this.change = !this.change;
  }

  updateUserDetails(fieldValue) {
    fieldValue && fieldValue.name && fieldValue.name === 'username' ? this.me.username = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'name' ? this.me.name = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'surname' ? this.me.surname = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'email' ? this.me.email = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'password' ? this.me.password = fieldValue.viewModel : '';
  }
  updateUser(){
    if(!this.me.hasOwnProperty('password')){
      this.me.password = '';
    }
    this.userService.updateUser(this.myId, this.me);
    this.modMisDatos();
  }

}
