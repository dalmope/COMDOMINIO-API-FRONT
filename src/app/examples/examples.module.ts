import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { EscenariosComponent } from './escenarios/escenarios.component';
import { ExtractosComponent } from './extractos/extractos.component';
import { TablaInmueblesComponent } from './inmuebles/tabla-inmuebles/tabla-inmuebles.component';
import { DataTablesModule } from 'angular-datatables';
import { NuevoInmuebleComponent } from './inmuebles/nuevo-inmueble/nuevo-inmueble.component';
import { TablaPropietariosComponent } from './propietarios/tabla-propietarios/tabla-propietarios.component';
import { NuevoPropietarioComponent } from './propietarios/nuevo-propietario/nuevo-propietario.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        DataTablesModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        InmueblesComponent,
        PropietariosComponent,
        EscenariosComponent,
        ExtractosComponent,
        TablaInmueblesComponent,
        NuevoInmuebleComponent,
        TablaPropietariosComponent,
        NuevoPropietarioComponent
    ]
})
export class ExamplesModule { }
