import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from '@pages/news/news.component';
import { NewsListComponent } from '@pages/news/news-list/news-list.component';
import { NewsDetailComponent } from '@pages/news/news-detail/news-detail.component';

const routes: Routes = [
    {
        path: '',
        component: NewsComponent
    },
    {
        path: 'list',
        component: NewsListComponent,
        data: { breadcrumb: 'List News' }
    },
    {
        path: 'details/:id',
        component: NewsDetailComponent,
        data: { breadcrumb: 'Details News' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
