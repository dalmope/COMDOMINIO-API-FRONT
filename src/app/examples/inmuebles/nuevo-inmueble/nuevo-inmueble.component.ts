import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Inmuebles } from 'app/models/Inmuebles';
import { InmueblesService } from 'app/services/inmuebles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css']
})
export class NuevoInmuebleComponent implements OnInit {

  direccion:string;

  constructor(
  private inmuebleService: InmueblesService,
  private toastr: ToastrService,
  private router: Router
  ) { }

  ngOnInit(): void {

  }
  
  agregarInmueble(){
    const inmueble = new Inmuebles(this.direccion);
    this.inmuebleService.post(inmueble).subscribe(data=>{
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



