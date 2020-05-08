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
        user: "Pedro Sánchez",
        username: "peterSa"
      },
      {
        title: "No se podrá salir a la calle",
        description: "No se podrá salir a la calle hasta nuevo aviso",
        date: new Date(),
        user: "Pedro Sánchez",
        username: "peterSa"
      },
      {
        title: "Se están desarrollando vacunas",
        description: "Las clases han sido suspendidas debido al COVID19",
        date: new Date(),
        user: "Pedro Sánchez",
        username: "peterSa"
      },
      {
        title: "Amin ponte a trabajar",
        description: "Amin no trabaja, deberíamos echarlo del grupo",
        date: new Date(),
        user: "Grupo 11",
        username: "11group"
      }
    ]
  }


}
