import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // That's the only change you should make to the HeroDetailComponent class. There are no more properties. There's no presentation logic. This component only receives a hero object through its hero property and displays it.
  @Input() hero?: Hero;
  //@Input decorator to make the hero property available for binding by the external HeroesComponent. figlio-padre.

  constructor() { }

  ngOnInit(): void {
  }

}
