import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapdetails',
  templateUrl: 'mapdetails.html',
})
export class MapdetailsPage {
  /* Name of the map is passed in from the Maps page, then that name is used to get the correct JSON data. */
  private mapDetails = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mapDetails = this.navParams.get("mapDetails");
  }
}
