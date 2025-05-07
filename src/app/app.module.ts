import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkyAlertModule } from '@skyux/indicators';
import { AppAlertComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from '../list-modal/list.module';
import { TileModule } from '../tile/tile.module';

@NgModule({
  declarations: [AppAlertComponent],
  imports: [
    CommonModule,
    SkyAlertModule,
    BrowserModule,
    AgGridModule,
    TileModule,
  ],
  bootstrap: [AppAlertComponent],
})
export class AppModule {
  /*
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
  */
}