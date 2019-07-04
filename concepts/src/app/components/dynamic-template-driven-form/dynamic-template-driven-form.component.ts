import { Component} from '@angular/core';
import {Pet} from '../forms/field.interface';

@Component({
  selector: 'dynamic-template-driven-form',
  templateUrl: './dynamic-template-driven-form.component.html',
  styleUrls: ['./dynamic-template-driven-form.component.css']
})
export class DynamicTemplateDrivenFormComponent{
  public form: {
      pets: Pet[];
  };
  constructor() {
      this.form = {
          pets: []
      };
      this.addPet();
  }
  public addPet() : void {
      this.form.pets.push({
          id: Date.now(), // <--- uniqueness hook.
          type: "Dog",
          name: "",
          age: "",
          isPastOn: false
      });
  }

  public processForm( form: any ) : void {
      console.warn( "Handling form submission!" );
      console.group( "Form Data" );
      console.log( this.form.pets );
      console.groupEnd();
      console.group( "Form Model" );
      console.log( form );
      console.groupEnd();
  }
  public removePet( index: number ) : void {
      this.form.pets.splice( index, 1 );
  }
}
