import { Injectable } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight';

@Injectable({providedIn: 'root'})
export class FlashLightService {
  private interval?: number;

  async toggle() {
    if (this.interval) {
      clearInterval(this.interval);
      await Flashlight.switchOff();
      this.interval = undefined;
      return;
    }

    await this.start();
  }

  async start() {
    if (!await this.available()) {
      return;
    }

    this.interval = window.setInterval(async () => {
      await Flashlight.toggle();
    }, 200);
  }

  available = () => Flashlight.available().catch(() => false)
}
