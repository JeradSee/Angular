import { SkyTilesModule } from '@skyux/tiles';
import { Component } from '@angular/core';

@Component({
  selector: 'div.tile1',
  templateUrl: './tile1.component.html',
  imports: [SkyTilesModule],
})
export class Tile1Component {
  public tileSettingsClick(): void {
    alert('tile settings clicked');
  }
}
