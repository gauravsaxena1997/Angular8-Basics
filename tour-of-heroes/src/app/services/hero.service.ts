import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

import {MessagesService} from '../services/messages.service';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor( private msgservice: MessagesService ) { }
  getHeroes(): Observable<Hero[]>{
    this.msgservice.add('Heroservice: Fetched hero list.')
    return of(HEROES);
  }

  getHero(id:number): Observable<Hero>{
    return of( HEROES.find(hero=> hero.id===id) )
  } 
}
