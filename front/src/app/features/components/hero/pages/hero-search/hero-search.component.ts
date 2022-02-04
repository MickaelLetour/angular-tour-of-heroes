import {Component, OnInit} from '@angular/core';
import { Observable} from "rxjs";
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>;
  resultFiltered: Hero[] = [];
  floatLabel: string = '';
  date: Date = new Date();
  selectedValuesCheckBox: string[] = [];
  selectedValuesRadioButton: string = 'val 1';

  constructor(private heroService : HeroService) { }

  search(event:any){
    this.heroes$ = this.heroService.searchHeroes(event.query);
    this.heroes$.subscribe({
      next: heroes => this.resultFiltered = heroes,
      error: err => console.error(err)
    });
  }

  ngOnInit(): void {
  }

}
