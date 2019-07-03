import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {
  color:string = '';
  condition:boolean;
  myStyles:any = {
    'padding': '20px',
    'font-size': '25px',
    'color': 'black',
    'fontFamily': 'cursive'
  }
  constructor() { }

  ngOnInit() {
  }

}
