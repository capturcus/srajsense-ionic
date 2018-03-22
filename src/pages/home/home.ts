import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import {AddDataPointPage} from '../add-data-point/add-data-point';
import {ADDED_DATA_POINT, Datapoint, DATAPOINTS_KEY} from '../../model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private datapoints: Array<Datapoint> = [];

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public storage: Storage,
  ) {}

  ionViewDidLoad() {
    this.refreshDatapoints();
  }

  refreshDatapoints() {
    console.log('refresh datapoints');
    this.storage.get(DATAPOINTS_KEY).then(data => {
      this.datapoints = data as Array<Datapoint>;
    })
  }

  goToAddDataPoint() {
    console.log("go to add data point");
    this.navCtrl.push(AddDataPointPage);
    this.events.subscribe(ADDED_DATA_POINT, () => {
      this.refreshDatapoints();
    })
  }
}
