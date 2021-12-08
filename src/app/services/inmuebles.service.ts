import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  inmueblesURL = environment.inmueblesURL;

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(`${this.inmueblesURL}`);
  }

  getOne(id: number) {
    return this.httpClient.get(`${this.inmueblesURL}/${id}`);
  }


}
