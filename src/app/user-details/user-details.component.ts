import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userId :String;
  public user;

  constructor(public userService: UserService){

  }

  ngOnInit() {
    this.user = {
      username: 'Hola',
      name: 'HOLA',
      surname: 'HOLA',
      email: 'HOLA',
      password: 'HOLA',
      state: true,
      role: 2
    }
  }


  updateUserDetails(fieldValue){
    fieldValue && fieldValue.name && fieldValue.name === 'username' ? this.user.username = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'name' ? this.user.name = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'surname' ? this.user.surname = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'email' ? this.user.email = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'password' ? this.user.password = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'checkbox' && fieldValue.viewModel === true ? this.user.role = "1" : "2";

  }

  updateUser(){
    this.userService.updateUser(this.userId, this.user);
  }

}
