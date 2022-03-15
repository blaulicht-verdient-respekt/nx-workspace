import { Injectable } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FlashLightService {
  private interval$ = new BehaviorSubject<number | undefined>(undefined);

  public readonly isOn$ = this.interval$.pipe(map(Boolean))

  async toggle() {
    if (this.interval$.value) {
      clearInterval(this.interval$.value);
      await Flashlight.switchOff();
      this.interval$.next(undefined);
      return;
    }

    await this.start();
  }

  async start() {
    if (!await this.available) {
      return;
    }

    this.interval$.next(window.setInterval(async () => {
      await Flashlight.toggle();
    }, 200));
  }

  readonly available = Flashlight.available().catch(() => false)
}
