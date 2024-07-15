import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Images } from './images';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getImages(): Observable<Images[]>{
    return this.http.get<Images[]>(`${this.apiServerUrl}/images/all`);
  }

  public addImage(image: Images): Observable<Images>{
    return this.http.post<Images>(`${this.apiServerUrl}/images/add`, image);
  }

  public updateImage(image: Images): Observable<Images>{
    return this.http.put<Images>(`${this.apiServerUrl}/images/update`, image);
  }

  public deleteImage(imageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/images/delete/${imageId}`);
  }

}
