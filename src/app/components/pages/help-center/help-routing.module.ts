// MODULES
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterListComponent } from '@pages/help-center/help-center-list/help-center-list.component';
import { HelpCenterDetailComponent } from '@pages/help-center/help-center-detail/help-center-detail.component';

const routesHelp: Routes = [
    {
        path: '',
        component: HelpCenterComponent,
        children: [
            {
                path: 'list',
                component: HelpCenterListComponent,
                data: { breadcrumb: 'List' }
            },
            {
                path: 'details',
                component: HelpCenterDetailComponent,
                data: { breadcrumb: 'Details' }
            },
            { path: "**", pathMatch: 'full', redirectTo: '' },
        ],
        data: { breadcrumb: 'Help' }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routesHelp)],
    exports: [RouterModule]
})
export class HelpRoutingModule { }
