import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-investment',
  templateUrl: 'investment.html',
})
export class InvestmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Investment');
  }

}
