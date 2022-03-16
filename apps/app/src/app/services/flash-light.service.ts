import { Injectable } from '@angular/core';
import { CapacitorFlash } from 'capacitor-flash';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FlashLightService {
  private interval$ = new BehaviorSubject<number | undefined>(undefined);
  private capacitorFlashOn$ = new BehaviorSubject<boolean>(false);

  public readonly isOn$ = this.interval$.pipe(map(Boolean))

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
    await CapacitorFlash.switchOn({intensity: 1});
    this.capacitorFlashOn$.next(true);
  }

  private async switchOff() {
    await CapacitorFlash.switchOff();
    this.capacitorFlashOn$.next(false);
  }

  readonly available = CapacitorFlash.isAvailable().then(({value}) => value).catch(() => false)
}
