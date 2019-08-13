import { Component, Input, OnInit } from '@angular/core';
import { post } from '../shared/models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() unPost : post;

  constructor() { }

  ngOnInit() {
  }

  // Sur clique du bouton Don't like 
  onDontLoveIt() {
    this.unPost.loveIts = this.unPost.loveIts - 1;
  }

  // Sur clique du bouton Like 
  onLoveIt() {
    this.unPost.loveIts = this.unPost.loveIts + 1;
  }
}
