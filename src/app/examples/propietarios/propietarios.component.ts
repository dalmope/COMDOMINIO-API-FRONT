import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/services/token.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {
  isAdmin = false;
  constructor(
    private Token: TokenService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.Token.isAdmin();
  }

}
