import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { BandDataService } from './band-data.service';
import { Band } from './model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map, mergeMap, startWith, debounceTime } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.css']
})
export class ReactiveProgrammingComponent implements OnInit {
  refreshDataClickSubject = new Subject();
  model$: Observable<{ bands: Band[], isLoading: boolean }>;
  bandForm: FormGroup;
  readonly localStorageKey = 'band-crate-snapshot';
  constructor(fb: FormBuilder,private bandDataService: BandDataService) {
    const refreshDataClick$ = this.refreshDataClickSubject.asObservable();
    const refreshTrigger$ = refreshDataClick$.pipe(
      startWith({})
    );
    const bandList$ = refreshTrigger$.pipe(
      mergeMap(() => this.bandDataService.getBands())
    );
    this.model$ = merge(
      refreshTrigger$.pipe(map(() => ({ bands: [], isLoading: true }))),
      bandList$.pipe(map(bands => ({ bands: bands, isLoading: false }))),
    ); 

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


