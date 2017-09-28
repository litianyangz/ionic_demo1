import { Component,ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-recommendation',
  templateUrl: 'recommendation.html',
})
export class RecommendationPage {
  @ViewChild('myslider')slider : Slides

 slides = [
    {
      image: "assets/slide-img/1.png",
      href:"http://www.baidu.com"
    },
    {
      image: "assets/slide-img/2.png",
       href:"http://www.baidu.com"
    },
    {
      image: "assets/slide-img/3.png",
       href:"http://www.baidu.com"
    },
    {
      image: "assets/slide-img/4.png",
       href:"http://www.baidu.com"
    }
  ];

  tui_icon = [
    {
      img: "assets/recomendation/qiandaoicon46.png",
      href:"",
      title:"每日签到"
    },
    {
      img: "assets/recomendation/tui_icon_re.png",
      href:"",
      title:"热门活动"
    },
    {
      img: "assets/recomendation/tui_icon_zui.png",
      href:"",
      title:"最新动态"
    },
    {
      img: "assets/recomendation/tui_icon_gong.png",
      href:"",
      title:"惠民公告"
    }
  ]
  rates = [
    {
      img:"assets/slide-img/1.png",
      href:"",
      tab:[
        {
          img:'',
          title:'asasa',
          tc:[
            {
            img:'',
            title:'asasa'
          }
          ]
        },
        {
          img:'',
          title:'asassa'
        },
        {
          img:'',
          title:'asasassa'
        }
      ]
    },
    {
      img:"assets/slide-img/1.png",
      href:"",
      span:'票惠宝921期'
    },
    {
      img:"assets/slide-img/1.png",
      href:"",
      span:'票惠宝922期'
    },
    {
      img:"assets/slide-img/1.png",
      href:"",
      span:'票惠宝923期'
    }
  ]
  change(){  //实现手动之后继续轮播
    setInterval(()=>{
      this.slider.slideNext(300,true);
    },1500)
  }
  // ionViewWillEnter(){ //页面跳转停止轮播
  //   this.slider.startAutoplay();
  // }
  // ionViewWillLeave(){ //页面回来继续轮播
  //   this.slider.stopAutoplay();
  // }
  constructor() {
  }
}
