import { NgModule } from '@angular/core';
import {HeroesComponent} from "./components/hero/pages/heroes/heroes.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./components/hero/pages/hero-detail/hero-detail.component";
import {HeroFormComponent} from "./components/hero/pages/hero-form/hero-form.component";


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-form', component: HeroFormComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesRoutingModule { }
