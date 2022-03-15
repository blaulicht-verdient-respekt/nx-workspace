import { Component } from '@angular/core';
import packageInfo from '../../../package.json';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public readonly packageInfo = packageInfo;

  constructor() {}

}
