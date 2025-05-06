import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkyAlertModule } from '@skyux/indicators';
import { AppComponent } from './app.component';
import { AG_GRID_DATA } from '../list-modal/list-data';

@NgModule({
  declarations: [AppComponent, AG_GRID_DATA],
  imports: [
    CommonModule,
    SkyAlertModule
  ]
})
export class AppModule {}