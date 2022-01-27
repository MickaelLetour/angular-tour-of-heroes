import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "../../interfaces/hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        name: 'Dr Nice',
        id: 11,
        age: 58, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 12,
        name: 'Narco',
        age: 548, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 13,
        name: 'Bombasto' ,
        age: 54148, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 14,
        name: 'Celeritas',
        age: 5, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 15,
        name: 'Magneta',
        age: 48, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 16,
        name: 'RubberMan',
        age: 1, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 17,
        name: 'Dynama' ,
        age: 99, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 18,
        name: 'Dr IQ' ,
        age: 51, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 19,
        name: 'Magma' ,
        age: 90, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 20,
        name: 'Tornado' ,
        age: 4546518, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        name: 'Dr Nice',
        id: 11,
        age: 55, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 12,
        name: 'Narco',
        age: 21, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 13,
        name: 'Bombasto' ,
        age: 54, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 14,
        name: 'Celeritas',
        age: 25, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 15,
        name: 'Magneta',
        age: 58, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 16,
        name: 'RubberMan',
        age: 97, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 17,
        name: 'Dynama' ,
        age: 44, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 18,
        name: 'Dr IQ' ,
        age: 23, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 19,
        name: 'Magma' ,
        age: 31, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      },
      {
        id: 20,
        name: 'Tornado' ,
        age: 58, adresse: "null part dimension",
        guild: "voleurs",
        power: "burn",
        dateDeNaissance: new Date('1990-09-18'),
        alterEgo: "Dark him"
      }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
