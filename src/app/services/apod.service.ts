import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(private http: HttpClient) { }

  getApod() {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  }
}
