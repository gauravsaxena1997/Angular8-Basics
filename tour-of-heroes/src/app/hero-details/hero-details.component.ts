import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Hero} from '../hero';
import{HeroService} from '../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }
  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');  
    this.heroService.getHero(id)
    .subscribe( hero=> this.hero=hero )
  }
  goBack():void{
    this.location.back();
  }

}
