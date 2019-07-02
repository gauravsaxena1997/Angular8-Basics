import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  name = new FormControl('');
  nameConstant:string = "Gaurav";
  // profileForm = new FormGroup({
  //   firstName: new FormControl('',Validators.required),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     houseNo: new FormControl(''),
  //     street: new FormControl(''),
  //     city: new FormControl('',Validators.required),
  //     pincode: new FormControl('')
  //   })
  // });

  // With Form Builder
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      houseNo: [''],
      street: [''],
      city: ['',Validators.required],
      pincode: ['']
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) {}
  updateName():void {
    this.name.setValue(this.nameConstant);
  }
  setReqFields():void {
    this.profileForm.patchValue({
      firstName: 'Gaurav',
      address: {
        city: 'Jaipur'
      }
    });
  };
  setAllFields():void {
    this.profileForm.setValue({
      firstName: 'Gaurav',
      lastName: 'Saxena',
      address:{
        houseNo: '487',
        street: 'Gangapol',
        city: 'Jaipur',
        pincode: '302002'
      },
      hobbies: ['Sketching']
    });
  };
  onSubmit():void {
    console.log(this.profileForm.value);
    this.profileForm.reset;
    
  };
  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }
  addHobbies() {
    this.hobbies.push(this.fb.control(''));
  }
}
