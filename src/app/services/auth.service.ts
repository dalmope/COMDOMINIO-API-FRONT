import { Injectable } from "@angular/core";
import { NuevoUsuario } from "app/models/nuevo-usuario";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { LoginUsuario } from "app/models/login-usuario";
import { JwtDTO } from "app/models/jwt-dto";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }
}