import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/services/token.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {
  isAdmin = false;
  constructor(
    private Token: TokenService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.Token.isAdmin();
  }

}
