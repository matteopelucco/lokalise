import { Component } from '@angular/core';

import { FreddiePage } from '../freddie/freddie';
import { BrianPage } from '../brian/brian';
import { RogerPage } from '../roger/roger';
import { JohnPage } from '../john/john';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FreddiePage;
  tab2Root = BrianPage;
  tab3Root = RogerPage;
  tab4Root = JohnPage;

  constructor() {

  }
}
