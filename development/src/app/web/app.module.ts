import { DashboardPage } from './../../pages/web/dashboard/dashboard';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppRoutingModule } from './app.routing';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class WebModule { }