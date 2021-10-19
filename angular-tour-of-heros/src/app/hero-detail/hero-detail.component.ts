import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
//The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // That's the only change you should make to the HeroDetailComponent class. There are no more properties. There's no presentation logic. This component only receives a hero object through its hero property and displays it.
  @Input() hero?: Hero;
  //@Input decorator to make the hero property available for binding by the external HeroesComponent. figlio-padre.

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
