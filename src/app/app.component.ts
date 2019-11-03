import { Component } from '@angular/core';
import { ServerDetails } from './serverdetails';
import { DataService } from './data.service';
import { ConvertedServerDetails } from './convertedserverdetails';
import { concatMap, mergeMap, switchMap, delay, tap, map } from 'rxjs/operators';

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
    // async call for an observable (promise)
    // return this.dataService.getServerDetails()
    //  .subscribe(data => this.serverDetails$ = data);


    // looks promising but wont supply the data to the 2nd service call
    // even after putting in delays
    return this.dataService.getServerDetails().pipe(
      tap(data => {
        console.log(data);
        this.serverDetails$ = data;
        // delay(3000)
      }),
      switchMap(data => this.dataService.getConvertedServerDetails(data.timestamp)),
      tap(data2 => {
        delay(2000)
        // console.log(data2);
        this.convertedServerDetails$ = data2;
      })
    ).subscribe(data2 => this.convertedServerDetails$ = data2);

    // this.dataService.getServerDetails().subscribe(result1 => {
    //   this.serverDetails$ = result1;
    //   this.dataService.getConvertedServerDetails(this.serverDetails$.timestamp)
    //     .subscribe(
    //       result2 => {
    //         this.convertedServerDetails$ = result2;
    //       }
    //     )
    // })
  }

}
