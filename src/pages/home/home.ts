import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HeroCountersPage } from '../hero-counters/hero-counters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public dataList1;
  public dataList2;
  
  constructor(public http: HTTP, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    /* URL of first API. Json response is saved as dataList1. */
    let url1 = "https://sheetsu.com/apis/v1.0su/9f71bdc6cb14";

    this.http.get(url1, {}, {})
      .then(response => {
        let data1 = JSON.parse(response.data);
        this.dataList1 = data1;
      })
      .catch( error => {
        console.error(error);
      });

      /* URL of first API. Json response is saved as dataList1. */
      let url2 = "https://sheetsu.com/apis/v1.0su/9c40a675d8c7";
      this.http.get(url2, {}, {})
        .then(response => {
          let data2 = JSON.parse(response.data);
          this.dataList2 = data2;
        })
        .catch( error => {
          console.log(error);
        });
  }

  /* Saves the name of the hero that was clicked so that the correct information is pulled up on the hero counters page. Then goes to the hero counters page.*/
  public goToHeroCountersPage(hero){
    this.navCtrl.push(HeroCountersPage, {
      heroDetails: hero
    });
  }

}
