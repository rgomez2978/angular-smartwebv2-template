// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '@components/shared.module';

// COMPONENTS
import { NewsComponent } from '@pages/news/news.component';
import { NewsListComponent } from '@pages/news/news-list/news-list.component';
import { NewsDetailComponent } from '@pages/news/news-detail/news-detail.component';
@NgModule({
    imports: [
        CommonModule,
        NewsRoutingModule,
        SharedModule
    ],
    declarations: [
        NewsComponent,
        NewsListComponent,
        NewsDetailComponent,
    ]
})
export class NewsModule { }