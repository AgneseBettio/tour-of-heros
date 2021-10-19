import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// Observable is one of the key classes in the RxJS library.
// In a later tutorial on HTTP, you'll learn that Angular's HttpClient methods return RxJS Observables. In this tutorial, you'll simulate getting data from the server with the RxJS of() function.
// Open the HeroService file and import the Observable and of symbols from RxJS.
import { Observable, of } from 'rxjs';
//injection MessageService
import { MessageService } from './message.service';

@Injectable({
  
    // When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. 
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  // getHeroes() to return data
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    const heroes = of(HEROES);
    this.messageService.add('Hero Service: fetched Heroes');
    return heroes;

  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
