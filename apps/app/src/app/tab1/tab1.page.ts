import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlashLightService } from '../services/flash-light.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab1Page {

  constructor(readonly fs: FlashLightService) {
  }

}
