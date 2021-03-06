import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { InmueblesComponent } from './examples/inmuebles/inmuebles.component';
import { DataTablesModule } from 'angular-datatables';
import { PropietariosComponent } from './examples/propietarios/propietarios.component';
import { EscenariosComponent } from './examples/escenarios/escenarios.component';
import { DisponibilidadComponent } from './examples/escenarios/disponibilidad/disponibilidad.component';
import { ExtractosComponent } from './examples/extractos/extractos.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',               component: ComponentsComponent },
    { path: 'user-profile',       component: ProfileComponent },
    { path: 'signup',             component: SignupComponent },
    { path: 'landing',            component: LandingComponent },
    { path: 'nucleoicons',        component: NucleoiconsComponent },
    { path: 'inmuebles',          component: InmueblesComponent },
    { path: 'propietarios',       component: PropietariosComponent },
    { path: 'escenarios',         component: EscenariosComponent },
    { path: 'disponibilidad',     component: DisponibilidadComponent },
    { path: 'extractos',          component: ExtractosComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    DataTablesModule
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
