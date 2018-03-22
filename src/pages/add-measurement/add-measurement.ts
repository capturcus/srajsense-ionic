import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Datapoint } from '../../model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AddMeasurementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-measurement',
  templateUrl: 'add-measurement.html',
})
export class AddMeasurementPage {

  private datapoint = new Datapoint("", []);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMeasurementPage');
    let realDp = this.navParams.get('datapoint');
    let dp = JSON.parse(JSON.stringify(realDp)) as Datapoint;
    for (let f of dp.features) {
      let feature = f as any;
      feature.chosen = "";
    }
    console.log(dp);
    this.datapoint = dp;
  }

  saveMeasurement() {
    let result = {};
    result['name'] = this.datapoint.name;
    for (let feature of this.datapoint.features as Array<any>) {
      result[feature.name] = feature.chosen;
    }
    console.log(result);
    let alert = this.alertCtrl.create({
      title: this.datapoint.name + ' sent!',
      subTitle: 'The ' + this.datapoint.name + ' measurement registered succesfully.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        },
      ]
    });
    alert.present();
  }

}
