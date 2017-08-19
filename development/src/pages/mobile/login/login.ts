import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //function to navigate to Registration page
  navigateToRegister(){
    this.navCtrl.setRoot(RegistrationPage);
  }

}
