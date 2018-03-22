import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Feature, Datapoint, ADDED_DATA_POINT, DATAPOINTS_KEY } from './../../model';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddDataPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-data-point',
  templateUrl: 'add-data-point.html',
})
export class AddDataPointPage {

  features: Array<Feature> = [];
  datapointName: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private storage: Storage,
    public events: Events,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPointPage');
  }

  addFeature() {
    this.features.push(new Feature("", []));
  }

  editOptions(feature, i) {
    console.log(feature, i);
    let editOptionsModal = this.modalCtrl.create('ModalPage', {feature: JSON.parse(JSON.stringify(feature))});
    editOptionsModal.onDidDismiss(data => {
      if (data !== null && data !== undefined) {
        this.features[i] = data;
      }
    });
    editOptionsModal.present();
  }

  addIntensity() {
    this.features.push(new Feature("intensity", ["1","2","3","4","5"]));
  }
  
  saveDataPoint() {
    this.storage.get(DATAPOINTS_KEY).then(datapoints => {
      if (datapoints === null) {
        datapoints = new Array<Datapoint>();
      }
      let newDP = new Datapoint(this.datapointName, this.features);
      datapoints.push(newDP);
      console.log(this.datapointName, this.features)
      console.log(newDP);
      console.log(datapoints);
      this.storage.set(DATAPOINTS_KEY, datapoints).then(data => {
        this.navCtrl.pop();
        this.events.publish(ADDED_DATA_POINT);
      });
    });
  }
}