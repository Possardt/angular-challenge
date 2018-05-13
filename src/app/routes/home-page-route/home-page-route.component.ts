import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.services';

@Component({
  selector: 'app-home-page-route',
  templateUrl: './home-page-route.component.html',
  styleUrls: ['./home-page-route.component.css']
})
export class HomePageRouteComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    console.log('inhere');
    this.photoService.getUsers().subscribe(data => console.log(data));
  }

}
