import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  public user : any;
  constructor(public userService: UserService,
              private router: Router){

  }

  ngOnInit() {
    this.user = {
      username: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      state: true,
      role: 2
    }
  }

  updateUser(fieldValue){
    fieldValue && fieldValue.name && fieldValue.name === 'username' ? this.user.username = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'name' ? this.user.name = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'surname' ? this.user.surname = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'email' ? this.user.email = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'password' ? this.user.password = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'checkbox' && fieldValue.viewModel === true ? this.user.role = "1" : "2";

  }

 createUser(){
   this.userService.addUser(this.user);
   this.router.navigate(['/usuarios']);
 }

}
