import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageRouteComponent } from './routes/home-page-route/home-page-route.component';
import { PhotoService } from './services/photo.services';
import { AlbumPageRouteComponent } from './routes/album-page-route/album-page-route.component';
import { FullAlbumPageRouteComponent } from './routes/full-album-page-route/full-album-page-route.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageRouteComponent,
    AlbumPageRouteComponent,
    FullAlbumPageRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
