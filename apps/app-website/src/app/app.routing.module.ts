import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexPage } from './pages/index/index.page';
import { IndexPageModule } from './pages/index/index.page.module';
import { ImprintPage } from './pages/imprint/imprint.page';
import { ImprintPageModule } from './pages/imprint/imprint.page.module';
import { PrivacyPage } from './pages/privacy/privacy.page';
import { PrivacyPageModule } from './pages/privacy/privacy.page.module';

@NgModule({
  imports: [
    IndexPageModule,
    ImprintPageModule,
    PrivacyPageModule,
    RouterModule.forChild([
      {path: '', component: IndexPage},
      {path: 'impressum', component: ImprintPage},
      {path: 'datenschutz', component: PrivacyPage},
    ]),
  ],
})
export class AppRoutingModule {

}
