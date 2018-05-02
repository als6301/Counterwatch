import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { StatsPage } from '../pages/stats/stats';

import { TabsPage } from '../pages/tabs/tabs';
import { HeroCountersPage } from '../pages/hero-counters/hero-counters'
import { MapdetailsPage } from '../pages/mapdetails/mapdetails';
import { StatDetailsPage } from '../pages/stat-details/stat-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    MapsPage,
    StatsPage,
    HomePage,
    TabsPage,
    HeroCountersPage,
    MapdetailsPage,
    StatDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapsPage,
    StatsPage,
    HomePage,
    TabsPage,
    HeroCountersPage,
    MapdetailsPage,
    StatDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
