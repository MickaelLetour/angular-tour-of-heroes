import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroFormComponent} from "./components/hero/pages/hero-form/hero-form.component";
import {HeroDetailComponent} from "./components/hero/pages/hero-detail/hero-detail.component";
import {HeroSearchComponent} from "./components/hero/pages/hero-search/hero-search.component";
import {HeroesComponent} from "./components/hero/pages/heroes/heroes.component";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DashboardComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    HeroFormComponent,
  ]
})
export class FeaturesModule { }
