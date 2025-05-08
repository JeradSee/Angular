import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid'

import { AgGridModule } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridOptions,
  ModuleRegistry,
  ValueFormatterParams,
} from 'ag-grid-community';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DATA, AgGridRow } from './list-data';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'ag-grid-data',
  standalone: true,
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridModule, SkyAgGridModule],
})
export class AgGridDataComponent {
  protected gridData = AG_GRID_DATA;
  protected gridOptions: GridOptions;

  #columnDefs: ColDef[] = [
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridRow, Date>) =>
        this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];

  private agGridSvc: SkyAgGridService;

  constructor(private injectedAgGridSvc: SkyAgGridService) {
    this.agGridSvc = injectedAgGridSvc;

    const gridOptions: GridOptions = {
      columnDefs: this.#columnDefs,
      rowSelection: { mode: 'singleRow' },
    };

    this.gridOptions = {
      columnDefs: this.#columnDefs,
      rowSelection: { mode: 'singleRow' }
    };
    console.log('Service Injected', this.agGridSvc);
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }
}
