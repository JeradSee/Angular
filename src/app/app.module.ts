import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkyAlertModule } from '@skyux/indicators';
import { AppComponent } from './app.component';
import { AG_GRID_DATA } from '../list-modal/list-data';
import { AgGridDataComponent } from '../list-modal/list.component';

@NgModule({
  declarations: [AppComponent, AgGridDataComponent],
  imports: [
    CommonModule,
    SkyAlertModule
  ]
})
export class AppModule {}