import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { OrderListComponent } from './order-list/order-list.component';
// import { OrderDetailsComponent } from './order-details/order-details.component'

const routes: Routes = [
    // {
    //     path: '',
    //     component: OrderListComponent
    // },
    // {
    //     path: 'details',
    //     component: OrderDetailsComponent,
    //     data: { breadcrumb: 'Details' }
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpRoutingModule { }
