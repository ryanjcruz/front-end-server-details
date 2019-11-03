import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import to handle HTTP calls 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // add import module so it can be accessible inside the application
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
