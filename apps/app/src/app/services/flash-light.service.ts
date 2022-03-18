import { Injectable } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Platform } from '@ionic/angular';

import { BehaviorSubject, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FlashLightService {
  private interval$ = new BehaviorSubject<number | undefined>(undefined);
  private capacitorFlashOn$ = new BehaviorSubject<boolean>(false);

  public readonly isOn$ = this.interval$.pipe(map(Boolean))

  constructor(
    private flashlight: Flashlight,
    private platform: Platform,
  ) { }

  async toggle() {
    if (this.interval$.value) {
      clearInterval(this.interval$.value);
      await this.switchOff();
      this.interval$.next(undefined);
      return;
    }

    await this.start();
  }

  async start() {
    if (!await this.available || this.interval$.value) {
      return;
    }

    this.interval$.next(window.setInterval(async () => {
      if (this.capacitorFlashOn$.value) {
        await this.switchOff()
      } else {
        await this.switchOn();
      }
    }, 250));
  }

  private async switchOn() {
    await this.flashlight.switchOn();
    this.capacitorFlashOn$.next(true);
  }

  private async switchOff() {
    await this.flashlight.switchOff();
    this.capacitorFlashOn$.next(false);
  }

  readonly available = new Promise<boolean>(async(resolve) => {
    await this.platform.ready();
    const available = this.platform.is('cordova') ? await this.flashlight.available() : false;
    resolve(available);
  })
}
