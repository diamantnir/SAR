import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  config: any;
  public gallery: Image[];


  constructor(private _http: HttpService) {

   

  }


  ngOnInit(): void {
    this._http.getGallery().subscribe(d => {
      this.gallery = d;
      console.log(this.gallery);

      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.gallery.length,
      };
    });

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}


interface Image {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;

}
