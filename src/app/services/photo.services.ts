import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable()
export class PhotoService {
    private baseUrl = 'http://jsonplaceholder.typicode.com';
    private photosUrl = `${this.baseUrl}/photos`; // URL to web api
    private usersUrl = `${this.baseUrl}/users`;
    private albumsUrl = `${this.baseUrl}/albums`;
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http
            .get<User[]>(this.usersUrl);
    }

    getUserAlbums(userId: string) {
        return this.http
            .get<Album[]>(`${this.albumsUrl}?userId=${userId}`);
    }

    getPhotos() {
        return this.http
            .get<any[]>(this.photosUrl);
    }

    getUserPhotos(userId: string) {
        return this.http
            .get<Photo[]>(`${this.photosUrl}?userId=${userId}`);
    }

    getAlbumPhotos(albumId: string) {
        return this.http
            .get<any[]>(`${this.photosUrl}/?albumId=${albumId}`);
    }
}
