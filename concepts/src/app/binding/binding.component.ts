import { Component, OnInit, Renderer2} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  headerValue:string = 'Angular Bindings';
  table_row = ELEMENT_DATA;
  nineth_index:PeriodicElement = this.table_row[7];
  firstElement:string = '';
  fontSize:number = 18;
  selectedElement:object = {};
  newElement:string[] = [];
  constructor( private ren:Renderer2) { }

  settheadStyles(): {}{
    let theadStyles = {
      'backgroundColor':'lightblue',
      'fontSize.px': '20',
      'color':'white'
    }
    return theadStyles;
  }
  getFirstElement():void{
    this.firstElement =  this.table_row[0].name;
    alert(this.firstElement);
  }
  inc():void {
    this.fontSize++;
  }
  dec():void{
    this.fontSize--;
  }
  getElement(element:object):void{
    this.selectedElement = element;
  }
  addNew(ele:string):void{
    let new_row:PeriodicElement = {
      name: ele,
      position: null,
      weight: null,
      symbol: ''
    }
    this.table_row.push(new_row);
  }
  ngOnInit() {
  }

}
