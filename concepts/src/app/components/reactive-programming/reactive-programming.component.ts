import { Component, OnInit } from '@angular/core';
import { bufferTime } from 'rxjs/operators';
import { BandDataService } from './band-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.css']
})
export class ReactiveProgrammingComponent {
  selected: string = 'All';
  readonly localStorageKey = 'band-crate-snapshot';
  constructor(banddataservive: BandDataService,
              toastr: ToastrService ) {

    banddataservive.getUpdates().pipe(
      bufferTime(30000),
    ).subscribe(
      bands=>{
        const bandNames = bands.map(b=> b.name).join(', ');
        toastr.info(`Following bands are updated: ${bandNames}`);
    })
  }
}


