import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageRouteComponent } from './routes/home-page-route/home-page-route.component';
import { AlbumPageRouteComponent } from './routes/album-page-route/album-page-route.component';
import { FullAlbumPageRouteComponent } from './routes/full-album-page-route/full-album-page-route.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path : 'users', component: HomePageRouteComponent },
  { path : 'users/:userId/albums', component: AlbumPageRouteComponent },
  { path : 'users/:userId/albums/:albumId', component: FullAlbumPageRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
