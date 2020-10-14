import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  config: any;
  public posts: Post[];
  newpost: Post;
  text: string;
  title: string;


  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getPosts().subscribe(d => {
      this.posts = d;
      console.log(this.posts);

      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.posts.length,
      };
    });

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  Remove(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.posts.length,
    };

  }

  Add(title, text) {
    console.log(title);
    console.log(text);
    this.posts.unshift({
      userId: "1",
      id:"1",
      title: title,
      body: text
    })

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.posts.length,
    };
  }

}



interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;

}
