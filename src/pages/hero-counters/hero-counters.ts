import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hero-counters',
  templateUrl: 'hero-counters.html',
})
export class HeroCountersPage {
  /* heroDetails is the JSON object for each hero, passed into this page from the hero page. */
  private heroDetails = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.heroDetails = this.navParams.get("heroDetails");
    console.log("Hero Details: ", this.heroDetails);
  }

  ionViewDidLoad() {
  }

}
