
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HttpServer {

  link: string = "http://sandbox.hmyd.cn:9006";
  login:string =  this.link + "/app/user/v3/login";
  currentTimeMillis: string = this.link + "	/app/nommal/v1/currentTimeMillis";

  constructor(private  http: Http){}

  public post(data){
    let header = new Headers();
    header.append('Content-Type', 'application/json');  // application/x-www-form-urlencoded; charset=UTF-8
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    header.append('Access-Control-Max-Age', '3600');
    header.append('Access-Control-Allow-Credentials', 'true');
    header.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    let options = new RequestOptions({ headers: header});

    this.http.post(this.currentTimeMillis,data, options)
      .subscribe(data=>{
        /*let loader = this.loading.create({
         content: "Checking ! Please wait...",
         duration: 1000
         });
         loader.present();*/
      },error => {
        /*let alert = this.alert.create({
         title: 'Warning',
         subTitle: '账号不存在或者密码不正确',
         buttons: ['OK']
         });
         alert.present();*/
      });
  }
  public get(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');  // application/x-www-form-urlencoded; charset=UTF-8
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    headers.append('Access-Control-Max-Age', '3600');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    let options = new RequestOptions({ headers: headers });
    this.http.get(this.currentTimeMillis, options)
      .subscribe(data=>{

      },error => {
        /*let alert = this.alert.create({
         title: 'Warning',
         subTitle: '账号不存在或者密码不正确',
         buttons: ['OK']
         });
         alert.present();*/
      });

  }

  public httpGetNoAuth(url: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');  // application/x-www-form-urlencoded; charset=UTF-8
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    headers.append('Access-Control-Max-Age', '3600');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }

  private handleError(error: Response) {
    console.log(error);
    // return Observable.throw(error.json().error || 'Server Error');
  }
}
