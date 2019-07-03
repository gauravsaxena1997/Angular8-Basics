import { Component, Input } from '@angular/core';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {LifecyleHooksService} from '../lifecycle-hooks/lifecyle-hooks.service';

let nextId = 1;

export class PeekABoo implements OnInit {
  constructor(private logger: LifecyleHooksService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'app-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.css']
})
export class LifecycleHooksChildComponent extends PeekABoo implements
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy {
@Input()  name: string;

private verb = 'initialized';

constructor(logger: LifecyleHooksService) {
super(logger);

let is = this.name ? 'is' : 'is not';
this.logIt(`name ${is} known at construction`);
}

// only called for/if there is an @input variable set by parent.
ngOnChanges(changes: SimpleChanges) {
let changesMsgs: string[] = [];
for (let propName in changes) {
if (propName === 'name') {
let name = changes['name'].currentValue;
changesMsgs.push(`name ${this.verb} to "${name}"`);
} else {
changesMsgs.push(propName + ' ' + this.verb);
}
}
this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
this.verb = 'changed'; // next time it will be a change
}

// Beware! Called frequently!
// Called in every change detection cycle anywhere on the page
ngDoCheck() { this.logIt(`DoCheck`); }

ngAfterContentInit() { this.logIt(`AfterContentInit`);  }

// Beware! Called frequently!
// Called in every change detection cycle anywhere on the page
ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

ngAfterViewInit() { this.logIt(`AfterViewInit`); }

// Beware! Called frequently!
// Called in every change detection cycle anywhere on the page
ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

ngOnDestroy() { this.logIt(`OnDestroy`); }
}
