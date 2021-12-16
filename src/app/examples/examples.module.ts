import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AsignarInmuebleComponent } from './inmuebles/asignar-inmueble/asignar-inmueble.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ComponentsModule } from 'app/components/components.module';
import { CardComponent } from 'app/examples/card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TablaEscenariosComponent } from './escenarios/tabla-escenarios/tabla-escenarios.component';
import { NuevoEscenarioComponent } from './escenarios/nuevo-escenario/nuevo-escenario.component';
import { CanlendarioComponent } from './escenarios/canlendario/canlendario.component';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule } from 'angular-calendar';
import { DisponibilidadComponent } from './escenarios/disponibilidad/disponibilidad.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        DataTablesModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatDialogModule,
        MatSelectModule,
        MatGridListModule,
        ReactiveFormsModule,
        JwBootstrapSwitchNg2Module,
        ComponentsModule,
        CalendarModule
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
        NuevoPropietarioComponent,
        AsignarInmuebleComponent,
        CardComponent,
        TablaEscenariosComponent,
        NuevoEscenarioComponent,
        CanlendarioComponent,
        DisponibilidadComponent,
    ]
})
export class ExamplesModule { }
