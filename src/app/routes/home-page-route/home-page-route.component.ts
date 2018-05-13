import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.services';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-route',
  templateUrl: './home-page-route.component.html',
  styleUrls: ['./home-page-route.component.css']
})
export class HomePageRouteComponent implements OnInit {
  private users: User[];
  constructor(
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.photoService.getUsers().subscribe(users => this.users = users);
  }

  routeToAlbums(userId: string) {
    return this.router.navigateByUrl(`users/${userId}/albums`);
  }

}
