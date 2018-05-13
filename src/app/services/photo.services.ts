import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    private baseUrl = 'http://jsonplaceholder.typicode.com';
    private photosUrl = `${this.baseUrl}/photos`; // URL to web api
    private usersUrl = `${this.baseUrl}/users`;
    private albumsUrl = `${this.baseUrl}/albums`;
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http
            .get<any[]>(this.usersUrl);
    }

    getPhotos() {
        return this.http
            .get<any[]>(this.photosUrl);
    }

    getAlbumThumbnails(userId: string) {
        return this.http
            .get<any[]>(`${this.albumsUrl}/?userId=${userId}&photoId=1`);
    }
}
