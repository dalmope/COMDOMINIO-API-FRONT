import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/services/token.service';

@Component({
  selector: 'app-extractos',
  templateUrl: './extractos.component.html',
  styleUrls: ['./extractos.component.css']
})
export class ExtractosComponent implements OnInit {

  isAdmin = false;
  constructor(
    private Token: TokenService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.Token.isAdmin();
  }
}
