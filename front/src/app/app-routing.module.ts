import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./features/components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./features/components/hero/pages/hero-detail/hero-detail.component";
import {HeroesComponent} from "./features/components/hero/pages/heroes/heroes.component";
import {HeroFormComponent} from "./features/components/hero/pages/hero-form/hero-form.component";


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
export class AppRoutingModule { }
