import { Component, OnInit } from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  heroes: Hero[] = [];

  text: string = '';

  results: string[] = [];

  powers = ['Really smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(0,'',0,'','','',new Date());

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  newHero(name: string, alterEgo : string | undefined, power: string): void {
    name = name.trim();
    if (!name && !alterEgo) {
      return;
    }
    this.heroService.addHero({ name, alterEgo, power } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // search(event: any) {
  //   this.heroService.getHeroes(event.query)
  //     .then(data => {
  //       this.results = data;
  //   });
  // }

}
