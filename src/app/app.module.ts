import { CommonModule } from '@angular/common';
import { NgModule, ApplicationRef } from '@angular/core';

import { SkyAlertModule } from '@skyux/indicators';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from '../list-modal/list.module';
import { TileModule } from '../tile/tile.module';
import { AgGridDataComponent } from '../list-modal/list.component';
import { TileComponent } from '../tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    SkyAlertModule,
    BrowserModule,
    AgGridModule,
    TileModule,
    AgGridDataComponent,
    TileComponent,
    AppComponent,
  ],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}