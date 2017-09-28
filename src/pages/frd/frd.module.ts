import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrdPage } from './frd';

@NgModule({
  declarations: [
    FrdPage,
  ],
  imports: [
    IonicPageModule.forChild(FrdPage),
  ],
  exports: [
    FrdPage
  ]
})
export class FrdModule {}
