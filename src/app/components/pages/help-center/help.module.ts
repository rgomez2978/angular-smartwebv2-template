// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { SharedModule } from '@components/shared.module';

// COMPONENTS
import { HelpCenterListComponent } from '@pages/help-center/help-center-list/help-center-list.component';
import { HelpCenterDetailComponent } from '@pages/help-center/help-center-detail/help-center-detail.component';
import { HelpCenterComponent } from '@pages/help-center/help-center.component';

@NgModule({
    imports: [
        CommonModule,
        HelpRoutingModule,
        SharedModule,
    ],
    declarations: [
        HelpCenterListComponent,
        HelpCenterDetailComponent,
        HelpCenterComponent
    ]
})
export class HelpModule { }

