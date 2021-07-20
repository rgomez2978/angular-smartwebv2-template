// MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterListComponent } from '@pages/help-center/help-center-list/help-center-list.component';
import { HelpCenterDetailComponent } from '@pages/help-center/help-center-detail/help-center-detail.component';

const routesChild: Routes = [
    {
        path: '',
        component: HelpCenterComponent
    },
    {
        path: 'list',
        component: HelpCenterListComponent,
        data: { breadcrumb: 'List' }
    },
    {
        path: 'details',
        component: HelpCenterDetailComponent,
        data: { breadcrumb: 'Details' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesChild)],
    exports: [RouterModule]
})
export class HelpRoutingModule { }
