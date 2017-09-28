import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybillPage } from './mybill';

@NgModule({
  declarations: [
    MybillPage,
  ],
  imports: [
    IonicPageModule.forChild(MybillPage),
  ],
  exports: [
    MybillPage
  ]
})
export class MybillModule {}
