import { Component, OnInit } from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  cols: any[] = [];
  first: number = 0;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.cols = [
      { field: 'id', header: 'Id'},
      { field: 'name', header: 'Name'},
      { field: 'age', header: 'Age'},
      { field: 'roleName', header: 'Role'},
      { field: 'regionName', header: 'Region'},
      { field: 'date', header: 'Date d\'ajout du hero'}
    ];
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  reset() {
    this.first = 0;
  }

  isDate(field: string): boolean {
    return field === 'dateDeNaissance';
  }

  isId(field: string): boolean {
    return field === 'id';
  }

  getEventValue($event:any) :string {
    return $event.target.value;
  }

}
