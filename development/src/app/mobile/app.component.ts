import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../../pages/mobile/login/login';
import { RegistrationPage } from '../../pages/mobile/registration/registration';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RegistrationPage;

  pages: Array<{ title: string, component: any, iconName: string }>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Dashboard', component: DashboardPage, iconName: 'home'},
    //   { title: 'New Application', component: NewApplicationPage, iconName: 'md-create' },
    //   { title: 'Task', component: TaskDetailsPage, iconName: 'list' }
    // ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
