import { Component } from '@angular/core';
import { NavParams, AlertController, LoadingController } from 'ionic-angular';
import {Http} from "@angular/http";
// import { HttpServer } from "../../providers/HttpServer";
import { Headers, RequestOptions } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data : any;
  constructor(
    
    public navParams: NavParams,
    private http : Http,
    private alert :AlertController,
    private loading : LoadingController,
    ) {

    this.data = {};
    this.data.username = "";
    this.data.password = "";
  }

  login(){
    let header = new Headers();
    header.append('Content-Type', 'application/json');  // application/x-www-form-urlencoded; charset=UTF-8
    header.append('hmjk-app', 'HMI'); 
    header.append('hmjk-app-v', '1.0'); 
    header.append('hmjk-app-m', 'Prod'); 
    header.append('hmjk-app-c', 'appStore'); 
   
    let options = new RequestOptions({ headers: header});

    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify({'senddata':{'username':username,'password':password}});
    let link = "http://sandbox.hmyd.cn:9017/app/auth/v1/login"

    this.http.post(link,data,options)
      .subscribe(data=>{
         let dic =  JSON.parse(data.text());
         console.log(dic);

         if(dic.state == '00'){
           let alert = this.alert.create({
             title: 'Warning',
             subTitle: '登录成功 !',
             buttons: ['OK']
            });
            alert.present();
          }if(dic.state == '1B'){
           let alert = this.alert.create({
             title: 'Warning',
             subTitle: '用户未注册 !',
             buttons: ['OK']
            });
            alert.present();
          }
          else{
            let alert = this.alert.create({
              title: 'Warning',
              subTitle: '登录失败 !',
              buttons: ['OK']
            });
        alert.present();
       }
      },error => {
        let alert = this.alert.create({
          title: 'Warning',
          subTitle: '请求失败 !',
          buttons: ['OK']
        });
        alert.present();
        console.log(error);
      });

  }

}

