import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  inmueblesURL = environment.inmueblesURL;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(`${this.inmueblesURL}`);
  }

  getOne(id: number): Observable<any> {
    return this.httpClient.get(`${this.inmueblesURL}/${id}`);
  }

  post(inmueble: any): Observable<any> {
    return this.httpClient.post(`${this.inmueblesURL}`, inmueble);
  }

  put(inmueble: any): Observable<any> {
    return this.httpClient.put(`${this.inmueblesURL}/${inmueble.id}`, inmueble);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.inmueblesURL}/${id}`);
  }

}
