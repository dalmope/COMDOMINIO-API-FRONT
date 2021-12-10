import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosUrl = environment.usuariosURL;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(this.usuariosUrl);
  }

  getOne(id: number): Observable<any> {
    return this.httpClient.get(`${this.usuariosUrl}/${id}`);
  }

  post(usuario: any): Observable<any> {
    return this.httpClient.post(this.usuariosUrl, usuario);
  }

  put(usuario: any): Observable<any> {
    return this.httpClient.put(`${this.usuariosUrl}/${usuario.id}`, usuario);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.usuariosUrl}/${id}`);
  }

}
