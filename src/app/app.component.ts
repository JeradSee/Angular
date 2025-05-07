import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkyAlertModule } from '@skyux/indicators';
import { AgGridDataComponent } from '../list-modal/list.component';
import { TileComponent } from '../tile/tile.component';


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, SkyAlertModule, AgGridDataComponent, TileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppAlertComponent {
  title = 'angular-app test';
  @Input()
  public days = 9;

  protected onClosedChange(event: boolean): void {
    alert(`Alert closed with: ${event}`);
  }
}

console.log('AppComponent loaded');