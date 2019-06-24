import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() element:object;
  @Output() newElement = new EventEmitter<string>();
  constructor(){}
  addNewElement(ele:string){
    this.newElement.emit(ele);
  }
}
