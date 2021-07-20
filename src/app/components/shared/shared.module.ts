// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';

// LIBRERIAS INSTALADAS
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// COMPONENTS
import { HeaderComponent } from '@components/header/header.component';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { AccordionComponent } from '@components/accordion/accordion.component';
import { ContentComponent } from '@components/content/content.component';
import { TitleComponent } from '@components/title/title.component';
import { CallToActionComponent } from '@components/call-to-action/call-to-action.component';
import { TabComponent } from '@components/tab/tab.component';
import { PriceComponent } from '@components/price/price.component';
import { ServiceComponent } from '@components/service/service.component';
import { MenuComponent } from '@components/menu/menu.component';
import { FormComponent } from '@components/form/form.component';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component';
import { StyckyComponent } from '@components/stycky/stycky.component';
import { MediaComponent } from '@components/media/media.component';


// DIRECTIVES
import { FormValidateDirective } from '@directives/form-validate.directive';

// PIPES
import { NoimagePipe } from '@pipes/noimage.pipe';
import { SafedomPipe } from '@pipes/safedom.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    AccordionComponent,
    ContentComponent,
    TitleComponent,
    CallToActionComponent,
    TabComponent,
    PriceComponent,
    ServiceComponent,
    MenuComponent,
    FormComponent,
    BreadcrumbComponent,
    StyckyComponent,
    MediaComponent,
    FormValidateDirective,
    SafedomPipe,
    NoimagePipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    AccordionComponent,
    ContentComponent,
    TitleComponent,
    CallToActionComponent,
    TabComponent,
    PriceComponent,
    ServiceComponent,
    MenuComponent,
    FormComponent,
    BreadcrumbComponent,
    StyckyComponent,
    MediaComponent,
    FormValidateDirective,
    SafedomPipe,
    NoimagePipe
  ],

})
export class SharedModule { }
