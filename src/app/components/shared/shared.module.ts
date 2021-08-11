// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// LIBRERIAS INSTALADAS
import { NgxPaginationModule } from 'ngx-pagination';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

// COMPONENTS
import { HeaderComponent } from '@components/header/header.component';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { AccordionComponent } from '@components/accordion/accordion.component';
import { ContentComponent } from '@components/content/content.component';
import { TitleComponent } from '@components/title/title.component';
import { CallToActionComponent } from '@components/call-to-action/call-to-action.component';
import { MenuComponent } from '@components/menu/menu.component';
import { FormComponent } from '@components/form/form.component';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component';
import { StyckyComponent } from '@components/stycky/stycky.component';
import { MediaComponent } from '@components/media/media.component';

// DIRECTIVES
import { FormValidateDirective } from '@directives/form-validate.directive';
import { ScrollContentDirective } from '@directives/scroll-content.directive';

// PIPES
import { NoimagePipe } from '@pipes/noimage.pipe';
import { SafedomPipe } from '@pipes/safedom.pipe';
import { FormErrorComponent } from './form-error/form-error.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    AccordionComponent,
    ContentComponent,
    TitleComponent,
    CallToActionComponent,
    MenuComponent,
    FormComponent,
    BreadcrumbComponent,
    StyckyComponent,
    MediaComponent,
    FormValidateDirective,
    SafedomPipe,
    NoimagePipe,
    ScrollContentDirective,
    FormErrorComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    NgxPageScrollCoreModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    AccordionComponent,
    ContentComponent,
    TitleComponent,
    CallToActionComponent,
    MenuComponent,
    FormComponent,
    BreadcrumbComponent,
    StyckyComponent,
    MediaComponent,
    FormValidateDirective,
    ScrollContentDirective,
    SafedomPipe,
    NoimagePipe
  ],

})
export class SharedModule { }
