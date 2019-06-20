import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  msgs:string[] = [];

  add(msg:string):void{
      this.msgs.push(msg)
  }

  clear():void{
    this.msgs = [];
  }

  constructor() { }
}
