import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule , HIGHCHARTS_MODULES} from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as no_data from 'highcharts/modules/no-data-to-display.src';
import * as highmaps from 'highcharts/modules/map.src';
import { HttpClientModule } from '@angular/common/http';


export function highchartsModules() {
  return [no_data, highmaps];
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
