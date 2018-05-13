import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-full-album-page-route',
  templateUrl: './full-album-page-route.component.html',
  styleUrls: ['./full-album-page-route.component.css']
})
export class FullAlbumPageRouteComponent implements OnInit {
  private albumId: string;
  private photos: Photo[];
  private selectedPhoto: Photo;
  private photosLoaded: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {
    this.albumId = this.route.snapshot.paramMap.get('albumId');
   }

  ngOnInit() {
    this.photoService.getAlbumPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
      this.photosLoaded = true;
    });
  }

  fullScreenPhoto(photo: Photo) {
    this.selectedPhoto = photo;
  }

  exitPhoto() {
    this.selectedPhoto = null;
  }

}
