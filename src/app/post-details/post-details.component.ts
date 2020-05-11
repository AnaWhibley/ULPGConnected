import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private post;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
