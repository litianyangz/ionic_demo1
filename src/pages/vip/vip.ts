import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-vip',
  templateUrl: 'vip.html',
})
export class VipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Vip');
  }

}
