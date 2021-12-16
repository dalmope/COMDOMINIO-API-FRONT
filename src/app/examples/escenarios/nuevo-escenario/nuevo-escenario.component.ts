import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EscenariosService } from 'app/services/escenarios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-escenario',
  templateUrl: './nuevo-escenario.component.html',
  styleUrls: ['./nuevo-escenario.component.css']
})
export class NuevoEscenarioComponent implements OnInit {

  nuevoEscenario = new FormGroup({
    nombre: new FormControl('', Validators.minLength(2)),
    descripcion: new FormControl('', Validators.minLength(2)),
    estado: new FormControl(true),
  });


  constructor( 
     private escenariosService: EscenariosService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  
  }
  

  agregarEscenario() {
    this.escenariosService.post(this.nuevoEscenario.value).subscribe(data=>{
      console.log(data);
      this.toastr.success('Inmueble Agregado Con Exito!', 'Agregado',{
      });
      this.router.navigateByUrl("/inmuebles");
    },err => {
      this.toastr.error(err.error.mensaje, 'Error', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
    }); 
  }

}
