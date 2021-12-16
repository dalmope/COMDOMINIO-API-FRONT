import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

cuentasURL = environment.cuentasURL;

  constructor(private httpClient: HttpClient) {}

  get(): Observable<any> {
    return this.httpClient.get(`${this.cuentasURL}`);
  }

  getOne(id: number): Observable<any> {
    return this.httpClient.get(`${this.cuentasURL}/${id}`);
  }

  post(inmueble: any): Observable<any> {
    return this.httpClient.post(`${this.cuentasURL}`, inmueble);
  }

  put(inmueble: any): Observable<any> {
    return this.httpClient.put(`${this.cuentasURL}/${inmueble.id}`, inmueble);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.cuentasURL}/${id}`);
  }

}
