import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private interval: any;
  private readonly flashlight = Flashlight

  constructor(private readonly platform: Platform) {

  }

  ionViewDidEnter() {
    this.start();
  }

  async toggle() {
    if (this.interval) {
      clearInterval(this.interval);
      await this.flashlight.switchOff();
      this.interval = null;
      return;
    }

    this.start();
  }

  start() {
    // if (!this.platform.is('mobile')) {
    //   return;
    // }

    this.interval = setInterval(async () => {
      await this.flashlight.toggle();
    }, 200);
  }

}
