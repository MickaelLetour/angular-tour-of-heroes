export class Hero {

  constructor(
      public id: number,
      public name: string,
      public age: number,
      public adresse: string,
      public guild : string,
      public power: string,
      public dateDeNaissance: Date,
      public alterEgo?: string,
  ) {}
}
