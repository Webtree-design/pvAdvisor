import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { UeberunsComponent } from './components/ueberuns/ueberuns.component';
import { KonfiguratorComponent } from './components/konfigurator/konfigurator.component';
import { NewsComponent } from './components/news/news.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'ueberuns', component: UeberunsComponent },
  { path: 'konfigurator', component: KonfiguratorComponent },
  { path: 'neuigkeiten', component: NewsComponent },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
