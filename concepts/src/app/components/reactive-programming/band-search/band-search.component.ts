import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, debounceTime, mergeMap } from 'rxjs/operators';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';

@Component({
  selector: 'app-band-search',
  templateUrl: './band-search.component.html',
  styles: []
})
export class BandSearchComponent {

  search$ = new Subject<string>();
  searchResults$: Observable<Band[]>;

  constructor(bandDataService: BandDataService) {
    this.searchResults$ = this.search$.pipe(
      filter(queryString => queryString.length > 2),
      debounceTime(500),
      mergeMap(bandDataService.searchBands.bind(bandDataService))
    );
  }

}
