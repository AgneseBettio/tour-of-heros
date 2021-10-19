import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // When the user clicks a hero in the list, the component should display the selected hero's details at the bottom of the page.
  selectedHero?: Hero;
  // heroes: (string | number)[] = HEROES; ---> NOT assignable
  heroes: Hero[] = [];

  constructor(private  heroService: HeroService, private messageService: MessageService) { }
  //NB public: Angular only binds to public component properties.

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
    //asynchronous approach 
        .subscribe(heroes => this.heroes = heroes);
  }


}
