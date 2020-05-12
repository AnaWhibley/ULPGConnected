import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {


  @Input() readonly: boolean = false;
  private clicked: boolean = false;

  constructor() { }

  ngOnInit() {
    $(function() {
      $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
      });
    });
  }

}
