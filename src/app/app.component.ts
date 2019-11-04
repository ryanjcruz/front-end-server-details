import { Component } from '@angular/core';
import { ServerDetails } from './serverdetails';
import { DataService } from './data.service';
import { ConvertedServerDetails } from './convertedserverdetails';
import { concatMap, mergeMap, switchMap, delay, tap, map, mergeMapTo } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-server-details';

  //add server details observable
  serverDetails$: ServerDetails;

  //converted server details
  convertedServerDetails$: ConvertedServerDetails;

  constructor(private dataService: DataService) {

  }

  // make API call on page load
  ngOnInit() {
    this.dataService.getServerDetails().pipe(
      tap(data => {
        this.serverDetails$ = data;
      }),
      mergeMap(data => {
        return this.dataService.getConvertedServerDetails(data.serverDateTimeMilli);
      })
    ).subscribe(
      data2 => {
        this.convertedServerDetails$ = data2
      }
    );

  }
}
