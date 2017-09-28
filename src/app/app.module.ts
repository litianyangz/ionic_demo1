import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//导入其他组件
import { MyApp } from './app.component'; 
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs'; //tab栏
import { RecommendationPage } from "../pages/recommendation/recommendation"; //惠民推荐
import { MorePage} from "../pages/more/more"; //更多
import { InvestmentPage} from "../pages/investment/investment";  //我要投资
import { AssetsPage} from "../pages/assets/assets"; // 我的资产 
import { NewcomerPage } from "../pages/newcomer/newcomer"; //新手礼包
import { VipPage } from "../pages/vip/vip"; //会员中心
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { IntergralshopPage } from "../pages/intergralshop/intergralshop"; //积分商城
import { MybillPage } from "../pages/mybill/mybill"; //我的账单
import { MessagePage } from "../pages/message/message"; //我的消息
import { FrdPage } from "../pages/frd/frd"; //好友推荐 
import { SafeCenterPage } from "../pages/safe-center/safe-center"; //安全中心
import { SinaPage } from "../pages/sina/sina"; //新浪账户

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule, JsonpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    TabsPage,
    RecommendationPage,
    MorePage,
    InvestmentPage,
    AssetsPage,
    NewcomerPage,
    VipPage,
    LoginPage,
    RegisterPage,
    IntergralshopPage,
    MybillPage,
    MessagePage,
    FrdPage,
    SafeCenterPage,
    SinaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollAssist:false,
      autoFocusAssist:false
    }),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    RecommendationPage,
    MorePage,
    InvestmentPage,
    AssetsPage,
    NewcomerPage,
    VipPage,
    LoginPage,
    RegisterPage,
    IntergralshopPage,
    MybillPage,
    MessagePage,
    FrdPage,
    SafeCenterPage,
    SinaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
