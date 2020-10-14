import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getGallery() {
    return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos')
  }


}


interface Image {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;

}


interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;

}
