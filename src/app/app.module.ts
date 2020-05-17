import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {FullCalendarModule} from '@fullcalendar/angular';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


@NgModule({

  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      [NgxMaterialTimepickerModule.setLocale('ar-AE')],
      FullCalendarModule,
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
