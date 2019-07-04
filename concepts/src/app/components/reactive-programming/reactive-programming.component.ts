import { debounceTime, filter, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { BandDataService } from './band-data.service';
import { Band } from './model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.css']
})
export class ReactiveProgrammingComponent implements OnInit {
  bandList:Band[];
  bandForm: FormGroup;
  readonly localStorageKey = 'band-crate-snapshot';
  constructor(fb: FormBuilder,private bandDataService: BandDataService) {
    const obs = interval(1000).pipe(
      map(val=>val*val),
      filter(val=>val%2==0)
    );
    obs.subscribe(
      (val)=> console.log(val)
    )
    this.bandDataService.getBands().subscribe(bands => {
      this.bandList = bands;
    });
    
    const currentYear = new Date().getFullYear();
    this.bandForm = fb.group({
      name: ['', Validators.required],
      formationYear: [currentYear, Validators.max(currentYear)],
      isActive: false,
      biography: ''
    });

    this.bandForm.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(formState => {
      localStorage.setItem(this.localStorageKey, JSON.stringify(formState));
    });
  }

  ngOnInit(): void {
    const formStateSerialized = localStorage.getItem(this.localStorageKey);
    if (formStateSerialized !== null) {
      const formState = JSON.parse(formStateSerialized);
      this.bandForm.setValue(formState);
    }
  }

}
