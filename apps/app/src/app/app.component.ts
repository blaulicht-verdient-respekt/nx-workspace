import { Component } from '@angular/core';
import packageInfo from '../../package.json';

@Component({
  selector: 'bvr-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public readonly packageInfo = packageInfo;

  constructor() {
    console.log(this.packageInfo)
  }
}
