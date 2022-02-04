import { Component, OnInit } from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.minLength(2))
  });

  heroes: Hero[] = [];
  text: string = '';
  results: string[] = [];
  powers = ['Really smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model: Hero = {age: 0, date: new Date(), regionName: "", id:0, name:'', roleName: ''};
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  newHero(name: string, age:number, region: string ): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}
