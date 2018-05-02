import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@IonicPage()
@Component({
  selector: 'page-stat-details',
  templateUrl: 'stat-details.html',
})

export class StatDetailsPage {
  private statDetails = {};
  public statDataList;
  
  public compRank;
  public compIcon;

  public compElims;
  public compBlows;
  public compObKills;
  public compObTime;
  public compHeroDamage;
  public compHealing;
  public compFire;
  public compSolo;

  public quickElims;
  public quickBlows;
  public quickObKills;
  public quickObTime;
  public quickHeroDamage;
  public quickHealing;
  public quickFire;
  public quickSolo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
    this.statDetails = this.navParams.get("statDetails");
  }

  ionViewDidLoad() {
    /* Calls the OWAPI using the BattleTag entered to get the personal stats for that player.
      All data must be set here because if you try to grab it from the HTML it is not set fast enough and throws an error.*/
    let statUrl = "https://owapi.net/api/v3/u/" + this.statDetails + "/stats";
    this.http.get(statUrl, {}, {})
      .then(response => {
        let statData = JSON.parse(response.data);

        this.statDataList = statData;
        
        this.compRank = this.statDataList.us.stats.competitive.overall_stats.comprank;
        this.compIcon = this.statDataList.us.stats.competitive.overall_stats.tier_image;

        this.compElims = this.statDataList.us.stats.competitive.game_stats.eliminations_most_in_game;
        this.compBlows = this.statDataList.us.stats.competitive.game_stats.final_blows_most_in_game;
        this.compObKills = this.statDataList.us.stats.competitive.game_stats.objective_kills_most_in_game;
        this.compObTime = this.statDataList.us.stats.competitive.game_stats.objective_time_most_in_game;
        this.compHeroDamage = this.statDataList.us.stats.competitive.game_stats.hero_damage_done_most_in_game;
        this.compHealing = this.statDataList.us.stats.competitive.game_stats.healing_done_most_in_game;
        this.compFire = this.statDataList.us.stats.competitive.game_stats.time_spent_on_fire_most_in_game;
        this.compSolo = this.statDataList.us.stats.competitive.game_stats.solo_kills_most_in_game;

        this.quickElims = this.statDataList.us.stats.quickplay.game_stats.eliminations_most_in_game;
        this.quickBlows = this.statDataList.us.stats.quickplay.game_stats.final_blows_most_in_game;
        this.quickObKills = this.statDataList.us.stats.quickplay.game_stats.objective_kills_most_in_game;
        this.quickObTime = this.statDataList.us.stats.quickplay.game_stats.objective_time_most_in_game;
        this.quickHeroDamage = this.statDataList.us.stats.quickplay.game_stats.hero_damage_done_most_in_game;
        this.quickHealing = this.statDataList.us.stats.quickplay.game_stats.healing_done_most_in_game;
        this.quickFire = this.statDataList.us.stats.quickplay.game_stats.time_spent_on_fire_most_in_game;
        this.quickSolo = this.statDataList.us.stats.quickplay.game_stats.solo_kills_most_in_game;
      })
      .catch( error => {
        console.error(error);
      });
  }
}
