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

  private post: {
    title: String,
    description: String,
    date: Date;
    userId: String
  }

  constructor(private auth: AuthService, private PostService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    this.post = {
      title: "",
      description: "",
      date: new Date(),
      userId: this.currentUser.id
    }
  }

  updatePost(fieldValue){
    fieldValue && fieldValue.name && fieldValue.name === 'title' ? this.post.title = fieldValue.viewModel : '';
    fieldValue && fieldValue.name && fieldValue.name === 'description' ? this.post.description = fieldValue.viewModel : '';
  }

  createPost(){
    this.PostService.addPost(this.post);
  }

}
