import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // When the user clicks a hero in the list, the component should display the selected hero's details at the bottom of the page.
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // heroes: (string | number)[] = HEROES; ---> NOT assignable
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }


}
