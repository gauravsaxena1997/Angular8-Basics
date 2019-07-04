import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.css']
})
export class ReactiveProgrammingComponent {
  // bandForm: FormGroup;
  // readonly localStorageKey = 'band-crate-snapshot';
  // constructor(fb: FormBuilder) {

  //   const currentYear = new Date().getFullYear();
  //   this.bandForm = fb.group({
  //     name: ['', Validators.required],
  //     formationYear: [currentYear, Validators.max(currentYear)],
  //     isActive: false,
  //     biography: ''
  //   });

  //   this.bandForm.valueChanges.pipe(
  //     debounceTime(500)
  //   ).subscribe(formState => {
  //     localStorage.setItem(this.localStorageKey, JSON.stringify(formState));
  //   });
  // }

  // ngOnInit(): void {
  //   const formStateSerialized = localStorage.getItem(this.localStorageKey);
  //   if (formStateSerialized !== null) {
  //     const formState = JSON.parse(formStateSerialized);
  //     this.bandForm.setValue(formState);
  //   }
  // }

}


