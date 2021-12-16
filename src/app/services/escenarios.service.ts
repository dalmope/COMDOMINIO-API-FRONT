import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscenariosService {

  escenariosURL = environment.escenariosURL;
  
  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(`${this.escenariosURL}`);
  }

  getOne(id: number): Observable<any> {
    return this.httpClient.get(`${this.escenariosURL}/${id}`);
  }

  post(inmueble: any): Observable<any> {
    return this.httpClient.post(`${this.escenariosURL}`, inmueble);
  }

  put(inmueble: any): Observable<any> {
    return this.httpClient.put(`${this.escenariosURL}/${inmueble.id}`, inmueble);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.escenariosURL}/${id}`);
  }

}
