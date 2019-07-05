import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin} from 'rxjs';
import { Subject } from 'rxjs';
import { map, mergeMap, startWith,combineLatest} from 'rxjs/operators';
import { merge } from 'rxjs';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'band-list',
  templateUrl: './band-list.component.html',
  styles: []
})
export class BandListComponent {
  refreshDataClickSubject = new Subject();
  model$: Observable<{ bands: Band[], isLoading: boolean }>;
  constructor(
      private bandDataService: BandDataService,
      private activatedRoute: ActivatedRoute,
      private userData: UserDataService
      ) {
    const refreshDataClick$ = this.refreshDataClickSubject.asObservable();
    const refreshTrigger$ = refreshDataClick$.pipe(
      startWith({}),
      combineLatest(this.activatedRoute.queryParams),
      map(([_, params]) => {
        if (params.active === undefined) return undefined;
        return params.active === "true";
      })
    );
    const bandList$ = refreshTrigger$.pipe(
      mergeMap((params) =>  forkJoin( 
        this.bandDataService.getBands(params),
        this.userData.currentUser
      )),
      map(([bands,userData])=>
        bands.map(band=> band.id === userData.favoriteBandId
          ? { ...band, favorite: true }
          : band  )
      )
    );
    this.model$ = merge(
      refreshTrigger$.pipe(map(() => ({ bands: [], isLoading: true }))),
      bandList$.pipe(map(bands => ({ bands: bands, isLoading: false }))),
    ); 
  }
}
