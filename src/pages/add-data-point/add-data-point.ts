import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Feature } from './../../model';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
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

  saveDataPoint() {
    console.log("save data point");
    console.log(this.features);
  }
}