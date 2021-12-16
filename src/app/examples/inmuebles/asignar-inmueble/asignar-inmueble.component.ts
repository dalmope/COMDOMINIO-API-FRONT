import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InmueblesService } from 'app/services/inmuebles.service';

@Component({
  selector: 'app-asignar-inmueble',
  templateUrl: './asignar-inmueble.component.html',
  styleUrls: ['./asignar-inmueble.component.css']
})
export class AsignarInmuebleComponent implements OnInit {
animalControl = new FormControl('', Validators.required);
selectFormControl = new FormControl('', Validators.required);
inmuebles: any;
inmueblesSet: Array<any> = [];


animals = [
  {name: 'Dog', sound: 'Woof!'},
  {name: 'Cat', sound: 'Meow!'},
  {name: 'Cow', sound: 'Moo!'},
  {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
];

  constructor(
    private inmueblesService: InmueblesService,
  ) { }



  ngOnInit(): void {
    this.cargarInmuebles();
  }

  cargarInmuebles() {
    this.inmueblesService.get().subscribe(
      data => {
        console.log(data);
        this.inmuebles = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  pruebasync () {
    console.log(this.animalControl.value);
  }

}
