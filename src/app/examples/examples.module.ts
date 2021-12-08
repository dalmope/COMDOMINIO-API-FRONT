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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        InmueblesComponent,
        PropietariosComponent,
        EscenariosComponent,
        ExtractosComponent,
        TablaInmueblesComponent
    ]
})
export class ExamplesModule { }
