import {Flashlight} from '@awesome-cordova-plugins/flashlight';
import {Injectable} from "@angular/core";
import {Platform} from "@ionic/angular";

@Injectable({providedIn: 'root'})
export class FlashLightService {
  private interval?: number;

  constructor(private readonly platform: Platform) {

  }

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
      alert('FLASH LIGHT NOT AVAILABLE')
      return;
    }

    this.interval = window.setInterval(async () => {
      await this.toggle();
    }, 200);
  }

  available = () => Flashlight.available().catch(() => false)
}
