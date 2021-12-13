import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'app/services/inmuebles.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-inmuebles',
  templateUrl: './tabla-inmuebles.component.html',
})
export class TablaInmueblesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  inmuebles: any;
  estado: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private inmueblesService: InmueblesService,
  ) { }

  ngOnInit(): void {
    this.cargarInmuebles();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  cargarInmuebles() {
    this.inmueblesService.get().subscribe(
      data => {
        console.log(data);
        this.inmuebles = data;
        this.dtTrigger.next();
        console.log(this.estado);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
