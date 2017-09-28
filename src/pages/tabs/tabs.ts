import { Component } from '@angular/core';

import { RecommendationPage } from "../recommendation/recommendation";
import { InvestmentPage } from "../investment/investment";
import { AssetsPage } from "../assets/assets";
import { MorePage } from "../more/more";

 @Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = RecommendationPage; //惠民推荐tab栏
  tab2Root: any = InvestmentPage; //我要投资tab栏
  tab3Root: any = AssetsPage; //我的资产
  tab4Root: any = MorePage; //更多

  constructor() {  //构造函数
  }

  
}
