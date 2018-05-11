import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEvenementPage } from './create-evenement';

@NgModule({
  declarations: [
    CreateEvenementPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEvenementPage),
  ],
})
export class CreateEvenementPageModule {}
