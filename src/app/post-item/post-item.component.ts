import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;
  @Input() date: String;
  @Input() user: String;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  goToDetails(){
    this.router.navigate(['/details']);
  }

}
