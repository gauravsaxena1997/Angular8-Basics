import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Hero} from '../hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id: 101, name: 'Iron man' },
      { id: 102, name: 'Nova' },
      { id: 103, name: 'Captain Marvel' },
      { id: 104, name: 'Spider man' },
      { id: 105, name: 'Black Panther' },
      { id: 106, name: 'The flash' },
      { id: 107, name: 'Arrow' },
      { id: 108, name: 'Shazam' },
      { id: 109, name: 'Rhino' },
      { id: 110, name: 'Ultron' },
  ];
  return {heroes};
  }
  getId(heroes:Hero[]):number{
    return heroes.length>0 ? Math.max(...heroes.map(hero=>hero.id))+1 : 101;
  }
}
