import { Component, OnInit } from '@angular/core';
import {PostItemComponent} from "../post-item/post-item.component";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  private posts;
  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        title: "Se cancelan las clases",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: new Date(),
        user: "Pedro Sánchez"
      },
      {
        title: "Se cancelan las clases",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: new Date(),
        user: "Pedro Sánchez"
      },
      {
        title: "Se cancelan las clases",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: new Date(),
        user: "Pedro Sánchez"
      },
      {
        title: "Se cancelan las clases",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: new Date(),
        user: "Pedro Sánchez"
      }
    ]
  }


}
