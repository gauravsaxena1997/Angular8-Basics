import { Component, OnInit } from '@angular/core';

import {LifecyleHooksService} from './lifecyle-hooks.service';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {
  hasChild = false;
  hookLog:string[];
  heroName:string = 'Deadpool' ;
  private logger: LifecyleHooksService;
  constructor( logger: LifecyleHooksService ) {
    this.logger = logger;
    this.hookLog = logger.logs;
   }
   toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Deadpool';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName = 'Venom';
    this.logger.tick();
  }
  ngOnInit() {
  }

}
