import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntergralshopPage } from './intergralshop';

@NgModule({
  declarations: [
    IntergralshopPage,
  ],
  imports: [
    IonicPageModule.forChild(IntergralshopPage),
  ],
  exports: [
    IntergralshopPage
  ]
})
export class IntergralshopModule {}
