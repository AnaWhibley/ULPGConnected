import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userId: String;
  public user;

  constructor(public userService: UserService,
              public _route: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      this.userId = String(params['id']);
      this.getUser(this.userId);
    });
  }
  getUser(userId){
    let id = String(userId);
    this.userService.getUserById(id).subscribe(user => {
     this.user = {...user};
    });
  }
  updateUserDetails(fieldValue) {
    fieldValue && fieldValue.name && fieldValue.name === 'username' ? this.user.username = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'name' ? this.user.name = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'surname' ? this.user.surname = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'email' ? this.user.email = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'password' ? this.user.password = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'checkbox' && fieldValue.viewModel === true ? this.user.role = "1" : "2";
  }
  updateUser(){
    if(!this.user.hasOwnProperty('password')){
      this.user.password = '';
    }
    this.userService.updateUser(this.userId, this.user);
    this.router.navigate(['/usuarios']);
  }

}
