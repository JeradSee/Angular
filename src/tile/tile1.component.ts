import { SkyTilesModule } from '@skyux/tiles';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'div-tile1',
  standalone: true,
  templateUrl: './tile1.component.html',
  imports: [SkyTilesModule, RouterOutlet],
})
export class Tile1Component {
  public tileSettingsClick(): void {
    alert('tile settings clicked');
  }
}
