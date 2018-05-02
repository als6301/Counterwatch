import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatDetailsPage } from '../stat-details/stat-details';

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  public battletagEntry;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  /* Sets the battletag that will go to the api and be used to pull up the stat details for it. */
  public goToStatDetailsPage(battleTag){
    this.navCtrl.push(StatDetailsPage, {
      statDetails: battleTag
    });
  }

}
