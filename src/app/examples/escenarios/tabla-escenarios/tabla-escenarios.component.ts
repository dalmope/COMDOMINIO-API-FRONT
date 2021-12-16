import { Component, OnInit } from '@angular/core';
import { EscenariosService } from 'app/services/escenarios.service';

@Component({
  selector: 'app-tabla-escenarios',
  templateUrl: './tabla-escenarios.component.html',
  styleUrls: ['./tabla-escenarios.component.css']
})
export class TablaEscenariosComponent implements OnInit {
  focus: any;
  focus1: any;
  escenarios: any;

  constructor(private escenariosService: EscenariosService,) { }

  ngOnInit(): void {
    this.cargarInmuebles();
  }

  cargarInmuebles() {
    this.escenariosService.get().subscribe(
      data => {
        console.log(data);
        this.escenarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  goToEscenario(id: number) {
    console.log(id);
  }

}
