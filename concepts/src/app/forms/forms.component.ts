import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  name = new FormControl('');
  nameConstant:string = "Gaurav";
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      houseNo: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl('')
    })
  });
  constructor() { }
  updateName():void {
    this.name.setValue(this.nameConstant);
  }
  onSubmit():void {
    console.warn(this.profileForm.value);
  }
  setReqFields():void {
    this.profileForm.patchValue({
      firstName: 'Gaurav',
      address: {
        city: 'Jaipur'
      }
    });
  }
  setAllFields():void {
    this.profileForm.setValue({
      firstName: 'Gaurav',
      lastName: 'Saxena',
      address:{
        houseNo: '487',
        street: 'Gangapol',
        city: 'Jaipur',
        pincode: '302002'
    }
    });
  }
}
