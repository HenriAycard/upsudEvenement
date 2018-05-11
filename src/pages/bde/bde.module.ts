import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BdePage } from './bde';

@NgModule({
  declarations: [
    BdePage,
  ],
  imports: [
    IonicPageModule.forChild(BdePage),
  ],
})
export class BdePageModule {}
