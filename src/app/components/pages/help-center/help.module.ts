import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { HelpCenterListComponent } from './help-center-list/help-center-list.component';
import { HelpCenterDetailComponent } from './help-center-detail/help-center-detail.component';

@NgModule({
    imports: [
        CommonModule,
        HelpRoutingModule
    ],
    declarations: [HelpCenterListComponent, HelpCenterDetailComponent]
})
export class HelpModule { }

