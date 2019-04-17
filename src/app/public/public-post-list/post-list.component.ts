import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../shared/post-data.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private postDataService: PostDataService
  ) { 
    this.postDataService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

}
