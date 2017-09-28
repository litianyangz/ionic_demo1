import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
//导入其他组件
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic'; //主页面
import { ListPage } from '../pages/list/list'; //list页面
import { TabsPage } from '../pages/tabs/tabs'; //tab页面
import { LoginPage } from '../pages/login/login';//登录
import { RegisterPage } from '../pages/register/register';//注册
import { NewcomerPage } from '../pages/newcomer/newcomer'; //新手礼包
import { VipPage } from '../pages/vip/vip'; //会员中心
import { MybillPage } from "../pages/mybill/mybill"; //我的账单
import { IntergralshopPage } from "../pages/intergralshop/intergralshop";//积分商城
import { MessagePage } from "../pages/message/message"; //我的消息
import { FrdPage } from "../pages/frd/frd"; //好友推荐 
import { SafeCenterPage } from "../pages/safe-center/safe-center"; //安全中心
import { SinaPage } from "../pages/sina/sina"; //新浪账户

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//组件依赖
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //组件试图
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  //声明变量
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    // public navCtrl: NavController
  ) {
    this.initializeApp();
  
    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: '新手礼包', component: NewcomerPage},
      { title: '会员中心', component: VipPage},
      { title: '我的账单', component:MybillPage},
      { title: '积分商城', component:IntergralshopPage},
      { title: '我的消息', component: MessagePage},
      { title: '好友推荐', component:FrdPage },
      { title: '安全中心',component:SafeCenterPage},
      { title: '新浪账户',component:SinaPage}   
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }
  goLogin(){
    this.menu.close();
    this.nav.push(LoginPage,{
     
    })
  }
  register(){
    this.menu.close();
    this.nav.push(RegisterPage,{
    })
  }
  
}
