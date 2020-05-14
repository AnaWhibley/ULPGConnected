import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {PostService} from "../services/post.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  private currentUser: any;
  private mList: any;
  private currentDate: any;
  private date: any;
  private post: {
    id: String,
    title: String,
    description: String,
    date: String;
    userId: String,
    userName: String,
    fullName: String,
    email: String
  }

  constructor(private auth: AuthService, private PostService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    this.currentDate = new Date();
    this.mList = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    this.date = String(this.currentDate.getDate() + " " + this.mList[this.currentDate.getMonth()]);
    this.post = {
      id: Math.random().toString(36).substr(2, 10),
      title: "",
      description: "",
      date: this.date,
      userId: this.currentUser.id,
      userName: this.currentUser.username,
      fullName: this.currentUser.name + ' ' + this.currentUser.surname,
      email: this.currentUser.email
    }

  }

  updatePost(fieldValue){
    fieldValue && fieldValue.name && fieldValue.name === 'title' ? this.post.title = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'description' ? this.post.description = fieldValue.viewModel : '';
  }

  createPost(){
    this.PostService.addPost({...this.post});
  }

}
