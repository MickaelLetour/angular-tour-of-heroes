import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>;

  resultFiltered: Hero[] = [];

  autoComplete: string = '';

  date: Date = new Date();

  selectedValuesCheckBox: string[] = [];

  selectedValuesRadioButton: string = 'val 1';

  constructor(private heroService : HeroService) { }

  search(event:any){
    this.heroes$ = this.heroService.searchHeroes(event.query);
    this.heroes$.subscribe(heroes => this.resultFiltered = heroes);
  }

  ngOnInit(): void {
  }

}
