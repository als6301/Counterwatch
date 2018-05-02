import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { MapdetailsPage } from '../mapdetails/mapdetails';

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  public mapDataList;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
  }

  ionViewDidLoad() {
    /* Gets the map data from a 3rd sheetsu API created from yet another google spreadsheet. */
    let url3 = "https://sheetsu.com/apis/v1.0su/a999da9988b2";
    this.http.get(url3, {}, {})
        .then(response => {
          let mapData = JSON.parse(response.data);
          this.mapDataList = mapData;
        })
        .catch(error =>{
          console.log(error);
        });
  }

  /* Goes to the correct map details page based on the name of the map that was clicked. */
  public goToMapDetailsPage(map){
    this.navCtrl.push(MapdetailsPage, {
      mapDetails: map
    });
  }
}
