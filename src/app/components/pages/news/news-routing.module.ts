// MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { NewsComponent } from '@pages/news/news.component';
import { NewsListComponent } from '@pages/news/news-list/news-list.component';
import { NewsDetailComponent } from '@pages/news/news-detail/news-detail.component';

const routesNews: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [
            {
                path: 'list',
                component: NewsListComponent,
                data: { breadcrumb: 'List' }
            },
            {
                path: 'details',
                component: NewsDetailComponent,
                data: { breadcrumb: 'Details' }
            },
            { path: "**", pathMatch: 'full', redirectTo: '' },
        ],
        data: { breadcrumb: 'Help' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesNews)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
