// MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterHomeComponent } from './help-center-home/help-center-home.component';
import { HelpCenterFeatureComponent } from '@app/components/pages/help-center/help-center-feature/help-center-feature.component';
import { HelpCenterDetailComponent } from '@pages/help-center/help-center-detail/help-center-detail.component';
import { HelpCenterSearchComponent } from './help-center-search/help-center-search.component';

const routesHelp: Routes = [
    {
        path: '',
        component: HelpCenterComponent,
        children: [
            {
                path: '',
                component: HelpCenterHomeComponent,
            },
            {
                path: 'feature/:id',
                component: HelpCenterFeatureComponent,
            },
            {
                path: 'details/:id',
                component: HelpCenterDetailComponent,
            },
            {
                path: 'search',
                component: HelpCenterSearchComponent,
            },
            // { path: "**", pathMatch: 'full', redirectTo: '' },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routesHelp)],
    exports: [RouterModule]
})
export class HelpRoutingModule { }
