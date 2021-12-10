import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'app/models/Usuarios';
import { TokenService } from 'app/services/token.service';
import { UsuariosService } from 'app/services/usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-propietarios',
  templateUrl: './tabla-propietarios.component.html',
  styleUrls: ['./tabla-propietarios.component.css']
})
export class TablaPropietariosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  propietarios: Usuarios[] = [];
  isAdmin= false;
  estados: any;
  isLogged = false;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private propietariosService: UsuariosService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarPropietarios();
    this.isAdmin = this.tokenService.isAdmin();
    this.isLogged = this.tokenService.isLogged();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  cargarPropietarios() {
    this.propietariosService.get().subscribe(data => {
      this.propietarios = (data as any).data;
      this.dtTrigger.next();
    });
    error => {
      this.toastr.error(error.error.message, 'Error');
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }





}
