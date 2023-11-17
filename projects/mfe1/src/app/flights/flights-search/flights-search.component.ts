import {Component} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: [ './flights-search.component.scss' ]
})
export class FlightsSearchComponent {
  columnDefs: ColDef[] = [
    { field: 'company' },
    { field: 'model' },
    { field: 'price' }
];

rowData = [
    { company: 'easyThing', model: 'airThing', price: 35000 },
    { company: 'RainThing', model: 'boinThing', price: 32000 },
    { company: 'TapThing', model: 'someThing', price: 72000 }
];
  
  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }


}
