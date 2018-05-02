import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroCountersPage } from './hero-counters';

@NgModule({
  declarations: [
    HeroCountersPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroCountersPage),
  ],
})
export class HeroCountersPageModule {}
