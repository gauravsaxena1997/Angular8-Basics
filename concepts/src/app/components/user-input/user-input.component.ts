import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  clickCount:number = 0;
  values:string = '';
  values2:string = '';
  upper:string = '';
  val:string = '';
  count():void{
    this.clickCount++;
  }
  onkeyup(event:any){
    this.values += event.key+ ' | ';
    console.log(typeof(event.target.value));
    
  }
  onkeyup2(event:KeyboardEvent){
    this.values2 += (<HTMLInputElement>event.target).value+ ' | ';    
  }
  toUpper(val:string){
    this.upper =  val.toUpperCase();
  }
  getval(val:string){
    this.val = val;
  }
  constructor() { }

  ngOnInit() {
  }

}
