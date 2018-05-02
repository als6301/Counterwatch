import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapdetailsPage } from './mapdetails';

@NgModule({
  declarations: [
    MapdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapdetailsPage),
  ],
})
export class MapdetailsPageModule {}
