import { Component, OnInit } from '@angular/core';
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
  propietarios: any;
  estados: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private usuariosService: UsuariosService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.cargarPropietarios();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  cargarPropietarios() {
    this.usuariosService.get().subscribe(data => {
      this.propietarios = data;
      this.dtTrigger.next();
      console.log(this.propietarios);
    });
    error => {
      this.toastr.error(error.error.message, 'Error');
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }





}
