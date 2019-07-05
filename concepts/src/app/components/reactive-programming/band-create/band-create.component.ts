import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, bufferTime, mapTo, map, scan } from 'rxjs/operators';
import { BandDataService } from '../band-data.service';
import { Subject, Observable, merge } from 'rxjs';

@Component({
  selector: 'app-band-create',
  templateUrl: './band-create.component.html',
  styleUrls: ['./band-create.component.css']
})
export class BandCreateComponent implements OnInit {
  bandForm: FormGroup;
  readonly localStorageKey = 'band-crate-snapshot';
  undoClick$ = new Subject();
  action$: Observable<Action>;
  constructor( fb: FormBuilder ) {

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
  
  this.action$ = merge (
      this.undoClick$.pipe(mapTo({type:'UNDO'})),
      this.bandForm.valueChanges.pipe(
        debounceTime(1000),
        map(s=>({type:'VALUE_CHANGE',payload:s})))
  )

  const reducer = (state:State,action:Action)=>{
    switch (action.type) {
      case 'VALUE_CHANGE':
        return {
          undoing: false,
          history: state.undoing ? state.history : [ ...state.history, action.payload ]
        }
      case 'UNDO':
        return {
          undoing: true,
          history: state.history.length<=1 ? state.history : state.history.slice(0,state.history.length-1)
        };
    }
  }

  const initialState:State = {
    history: [],
    undoing: false
  }

  const state$ = this.action$.pipe(scan(reducer,initialState));
  state$.subscribe(state=>{
    console.log(state);
    if (state.undoing){
      this.bandForm.setValue(state.history[state.history.length-1]);
    }
    
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

interface Action {
  type: string,
  payload?: any
}

interface State {
  history: any[],
  undoing: boolean
}