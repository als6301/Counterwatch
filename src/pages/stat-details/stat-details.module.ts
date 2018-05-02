import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatDetailsPage } from './stat-details';

@NgModule({
  declarations: [
    StatDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatDetailsPage),
  ],
})
export class StatDetailsPageModule {}
