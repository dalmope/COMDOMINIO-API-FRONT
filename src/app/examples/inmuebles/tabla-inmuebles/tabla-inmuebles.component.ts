import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'app/services/inmuebles.service';
import { TokenService } from 'app/services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-inmuebles',
  templateUrl: './tabla-inmuebles.component.html',
})
export class TablaInmueblesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  inmuebles: any;
  isAdmin= false;
  isLogged = false;
  estados: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private inmueblesService: InmueblesService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

    this.cargarInmuebles();
    this.isAdmin = this.tokenService.isAdmin();
    this.isLogged = this.tokenService.isLogged();

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
