import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-propietario',
  templateUrl: './nuevo-propietario.component.html',
  styleUrls: ['./nuevo-propietario.component.css']
})
export class NuevoPropietarioComponent implements OnInit {
  
  tipoDoc: String;
  numDoc: number;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  telefono: number;
  email: string;
  password: string;
  rol: string;

  constructor() { }

  ngOnInit(): void {
  }

}
