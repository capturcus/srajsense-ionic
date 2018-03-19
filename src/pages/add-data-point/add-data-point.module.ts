import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDataPointPage } from './add-data-point';

@NgModule({
  declarations: [
    AddDataPointPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDataPointPage),
  ],
})
export class AddDataPointPageModule {}
