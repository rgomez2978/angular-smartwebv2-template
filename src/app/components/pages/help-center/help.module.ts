// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { SharedModule } from '@components/shared.module';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


// COMPONENTS
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterHomeComponent } from './help-center-home/help-center-home.component';
import { HelpCenterFeatureComponent } from './help-center-feature/help-center-feature.component';
import { HelpCenterDetailComponent } from '@pages/help-center/help-center-detail/help-center-detail.component';
import { HelpCenterSearchComponent } from './help-center-search/help-center-search.component';
import { ScrollContentDirective } from '@directives/scroll-content.directive';
@NgModule({
    imports: [
        CommonModule,
        HelpRoutingModule,
        SharedModule,
        NgxPageScrollCoreModule.forRoot(),

    ],
    declarations: [
        HelpCenterComponent,
        HelpCenterHomeComponent,
        HelpCenterFeatureComponent,
        HelpCenterDetailComponent,
        HelpCenterSearchComponent,
        ScrollContentDirective
    ]
})
export class HelpModule { }