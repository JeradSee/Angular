import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppAlertComponent } from '../alert/alert.component';
import { AgGridDataComponent } from '../list-modal/list.component';
import { TileComponent } from '../tile/tile.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AppAlertComponent, AgGridDataComponent, TileComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'Jerads Angular Project';
}