import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';
import { StatsPage } from '../stats/stats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapsPage;
  tab3Root = StatsPage;

  constructor() {

  }
}
