import { Component } from '@angular/core';
import { SkyTileDashboardConfig, SkyTilesModule } from '@skyux/tiles';

import { Tile1Component } from './tile1.component';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    imports: [SkyTilesModule],
})

export class TileComponent {
    protected dashboardConfig: SkyTileDashboardConfig = {
      tiles: [
        {
          id: 'tile1',
          componentType: Tile1Component,
        },
      ],
      layout: {
        singleColumn: {
          tiles: [
            {
              id: 'tile1',
              isCollapsed: true,
            },
          ],
        },
        multiColumn: [
          {
            tiles: [
              {
                id: 'tile1',
                isCollapsed: true,
              },
            ],
          },
        ],
      },
    };
  }