import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink:"/dashboard"},
      {label: 'Heroes', icon: 'pi pi-fw pi-user', routerLink:"/heroes"},
      {label: 'HeroForm', icon: 'pi pi-fw pi-pencil', routerLink:"/hero-form"},
    ];

    this.activeItem = this.items[0];
  }

}
