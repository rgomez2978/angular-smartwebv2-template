import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from '@pages/news/news.component';
import { NewsListComponent } from '@pages/news/news-list/news-list.component';
import { NewsDetailComponent } from '@pages/news/news-detail/news-detail.component';

const routesNews: Routes = [
    {
        path: 'list',
        component: NewsListComponent,
        data: { breadcrumb: 'List News' }
    },
    {
        path: 'details',
        component: NewsDetailComponent,
        data: { breadcrumb: 'Details News' }
    },
    { path: "**", pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
    imports: [RouterModule.forChild(routesNews)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
