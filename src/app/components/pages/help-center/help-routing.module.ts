// MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterHomeComponent } from './help-center-home/help-center-home.component';
import { HelpCenterListComponent } from '@pages/help-center/help-center-list/help-center-list.component';
import { HelpCenterDetailComponent } from '@pages/help-center/help-center-detail/help-center-detail.component';

const routesHelp: Routes = [
    {
        path: '',
        component: HelpCenterComponent,
        children: [
            {
                path: '',
                component: HelpCenterHomeComponent,
                data: { breadcrumb: 'HELP' }
            },
            {
                path: 'list',
                component: HelpCenterListComponent,
                data: { breadcrumb: 'LIST' }
            },
            {
                path: 'details',
                component: HelpCenterDetailComponent,
                data: { breadcrumb: 'DETAILS' }
            },
            { path: "**", pathMatch: 'full', redirectTo: '' },
        ],
        data: { breadcrumb: 'HELP' }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routesHelp)],
    exports: [RouterModule]
})
export class HelpRoutingModule { }
