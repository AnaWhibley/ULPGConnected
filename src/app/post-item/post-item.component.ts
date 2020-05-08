import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  private post;
  @Input() title: String;
  @Input() description: String;
  @Input() date: String;
  @Input() user: String;
  @Input() username: String;

  constructor( private router: Router) { }

  ngOnInit() {
    this.post = {
      title: this.title,
      description: this.description,
      date: this.date,
      user: this.user,
      username: this.username
    };
  }

  goToDetails(){
    this.router.navigate(['/details']);
  }

}
