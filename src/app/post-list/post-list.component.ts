import { Component, OnInit } from '@angular/core';
import {PostItemComponent} from "../post-item/post-item.component";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
