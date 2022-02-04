import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./fragments/footer/footer.component";
import {HeaderComponent} from "./fragments/header/header.component";
import {NavbarComponent} from "./fragments/navbar/navbar.component";
import {TabMenuModule} from "primeng/tabmenu";
import {BrowserModule} from "@angular/platform-browser";
import {FeaturesModule} from "../features/features.module";
import { MainComponent } from './fragments/main/main.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        MainComponent
    ],
  imports: [
    CommonModule,
    TabMenuModule,
    BrowserModule,
    FeaturesModule,
  ]
})
export class CoreModule { }
