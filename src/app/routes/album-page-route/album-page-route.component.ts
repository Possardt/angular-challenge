import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-page-route',
  templateUrl: './album-page-route.component.html',
  styleUrls: ['./album-page-route.component.css']
})
export class AlbumPageRouteComponent implements OnInit {
  private userId: string;
  private albums: Album[];
  private albumThumbnails: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);
  }
  ngOnInit() {
    this.photoService.getUserAlbums(this.userId).subscribe(albums => this.albums = albums);
    this.photoService.getUserPhotos(this.userId).subscribe(photos => {
      photos.filter((elem, ind, arr) => arr.indexOf(elem) === ind)
        .forEach(photo => {
          this.albumThumbnails[photo.albumId] = photo.thumbnailUrl;
        });
    });
  }

  routeToFullAlbum(albumId: string) {
    return this.router.navigateByUrl(`users/${this.userId}/albums/${albumId}`);
  }


}
