import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap} from "rxjs";
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>|any;

  autoComplete: string = '';
  resultsAutoComplete: Hero[] = [];

  date: Date = new Date();

  selectedValuesCheckBox: string[] = [];

  selectedValuesRadioButton: string = 'val 1';

  private searchTerms = new Subject<string>();

  constructor(private heroService : HeroService) { }

  search(event:any){
    this.searchTerms.next(event.query);
  }

  ngOnInit(): void {
    // this.heroes$ = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
    this.searchTerms.asObservable().pipe(
      filter(text => text.length >=3),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.heroService.searchHeroes(term)))
        .subscribe(hero => {
          this.resultsAutoComplete = hero;
        }
    )
  }

}
