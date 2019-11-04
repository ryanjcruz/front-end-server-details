# FrontEndServerDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

- Created Angular Project via Angular CLI
- added endpoints from AWS API deployed and the converter in the service file
- created classes for server response and converted response
- should pass the result of the first observable to the second observable as the param in the URL (timestamp in milliseconds) DONE - The issue is that the param I was passing was not existing as property of the serverdetails class (Silly me, was pulling my hair out on this)
- convert timestamp both for server result and converted result from millisecond to medium date filter in Angular DONE
- Deploy DIST folder to S3 - DONE