import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

// Créer un tableau listant des données en utilisant la pagination,
// avec la possibilité de trier les données sur chaque colonne, et les filtrer (en global, ou sur colonne, tant qu'il y a au moins un filtre)
// Créer un formulaire en utilisant des input, autocomplete, calendar, checkbox, radiobutton,
// sur 4 colonnes, en responsive pour que 4 colonnes passent à 2, puis 1.
