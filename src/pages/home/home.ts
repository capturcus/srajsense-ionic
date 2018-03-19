import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddDataPointPage} from '../add-data-point/add-data-point';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAddDataPoint() {
    console.log("go to add data point");
    this.navCtrl.push(AddDataPointPage);
  }
}
