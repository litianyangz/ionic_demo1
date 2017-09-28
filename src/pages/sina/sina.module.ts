import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinaPage } from './sina';

@NgModule({
  declarations: [
    SinaPage,
  ],
  imports: [
    IonicPageModule.forChild(SinaPage),
  ],
  exports: [
    SinaPage
  ]
})
export class SinaModule {}
