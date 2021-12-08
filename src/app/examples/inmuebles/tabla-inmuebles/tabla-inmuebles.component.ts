import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'app/services/inmuebles.service';
import { TokenService } from 'app/services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-inmuebles',
  templateUrl: './tabla-inmuebles.component.html',
  styleUrls: ['./tabla-inmuebles.component.css']
})
export class TablaInmueblesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  inmuebles: any[] = [];
  isAdmin: boolean;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private inmueblesService: InmueblesService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

    this.cargarInmuebles();
    this.isAdmin = this.tokenService.isAdmin();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  cargarInmuebles() {
    this.inmueblesService.get().subscribe(
      data => {
        this.inmuebles = (data as any).data;
        this.dtTrigger.next();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
