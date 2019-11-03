import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerDetails } from './serverdetails';
import { ConvertedServerDetails } from './convertedserverdetails';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  serverDetailsApiUrl = 'http://serverdetailsapi-env.dpcp87kjw5.us-east-2.elasticbeanstalk.com/getdetails'

  // we put in the static params for now as
  // those are not gonna change any time soon
  // i.e from time (server time is UTC by default)
  // API key and To location (Asia/Manila)
  // we will be supplying the server time in milliseconds to the call
  converterServiceApiUrl = 'http://api.timezonedb.com/v2.1/convert-time-zone?key=UCYNB6SHRWE3&format=json&from=UTC&to=Asia/Manila&time='

  constructor(private _http: HttpClient) { }

  getServerDetails() {
    return this._http.get<ServerDetails>(this.serverDetailsApiUrl);
  }

  getConvertedServerDetails(timestamp) {
    console.log(timestamp)
    return this._http.get<ConvertedServerDetails>(this.converterServiceApiUrl + timestamp);
  }

}
