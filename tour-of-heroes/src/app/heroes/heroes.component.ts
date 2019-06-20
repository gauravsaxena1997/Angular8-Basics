import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero:Hero;
  details( hero: Hero ):void {
    this.selectedHero = hero;   
  }
  constructor() { }

  ngOnInit() {
  }

}
