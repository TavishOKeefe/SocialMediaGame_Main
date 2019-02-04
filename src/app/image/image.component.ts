import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageApiService } from '../image-api.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [ ImageApiService]
})
export class ImageComponent {
   images: any[]=null;

  constructor(private imageApiPosts: ImageApiService) { }

  showImagePosts(search: string) {
    this.imageApiPosts.getImagePost(search).subscribe(response => {
        this.images = response.json();
    })

  }

}
