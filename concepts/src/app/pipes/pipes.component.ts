import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  today:Date = new Date();
  toggle:boolean = true;
  baseValue:number;
  power:number = 1;
  constructor() { }

  ngOnInit() {
  }
  get format(){
    {return this.toggle?'shortDate':'fullDate';}
  }
  toggleFormat():void{
    this.toggle = !this.toggle;
  }
}
