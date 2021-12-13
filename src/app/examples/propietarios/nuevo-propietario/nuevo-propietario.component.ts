import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from 'app/models/Inmueble';
import { Usuarios } from 'app/models/Usuarios';
import { InmueblesService } from 'app/services/inmuebles.service';
import { UsuariosService } from 'app/services/usuarios.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private usuarioService: UsuariosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const usuario = new Usuarios(this.tipoDoc, this.numDoc, this.nombre, this.apellido, this.nombreUsuario, this.telefono, this.email, this.password, this.rol);
    this.usuarioService.post(usuario).subscribe(
      data => {
        console.log(usuario);
        this.toastr.success('Usuario Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
