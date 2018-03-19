import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Feature } from './../../model';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-page',
  templateUrl: 'modal-page.html',
})
export class ModalPage {

  feature: Feature = null;
  tempOption: string;

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    this.feature = this.navParams.get('feature') as Feature;
    console.log(this.feature);
  }

  cancelModal() {
    this.view.dismiss(null);
  }

  closeModal() {
    this.view.dismiss(this.feature);
  }

  addOption() {
    this.feature.options.push(this.tempOption);
    this.tempOption = "";
  }
}
