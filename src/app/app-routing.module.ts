import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '/',
        loadComponent: () =>
            import('../alert/alert.component').then(
                (m) => m.AppAlertComponent,
            ),
    },
    {
        path: '/',
        loadComponent: () =>
            import('../list-modal/list.component').then(
                (m) => m.AgGridDataComponent,
            ),
    },
    {
        path: '/',
        loadComponent: () =>
            import('../tile/tile.component').then(
                (m) => m.TileComponent,
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}