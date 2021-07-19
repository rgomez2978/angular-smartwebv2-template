// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS - LAYOUT
import { AppComponent } from './app.component';
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { LoadingComponent } from '@layout/loading/loading.component';
import { FloatComponent } from '@layout/float/float.component';

// COMPONENTS - SHARED
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

// COMPONENTS - PAGE
import { HomeComponent } from '@pages/home/home.component';
import { ProductsComponent } from '@pages/products/products.component';
import { PlanesComponent } from '@pages/planes/planes.component';
import { ResourcesCenterComponent } from '@pages/resources-center/resources-center.component';
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterDetailComponent } from '@app/components/pages/help-center/help-center-detail/help-center-detail.component';
import { FaqComponent } from '@pages/faq/faq.component';
import { NewsComponent } from '@pages/news/news.component';
import { NewsDetailComponent } from '@pages/news-detail/news-detail.component';
import { ContactusComponent } from '@pages/contactus/contactus.component';
import { PrivacyPoliticsComponent } from '@pages/privacy-politics/privacy-politics.component';
import { LegalTermsComponent } from '@pages/legal-terms/legal-terms.component';
import { RelatedSitesComponent } from '@pages/related-sites/related-sites.component';
import { SiteMapComponent } from '@pages/site-map/site-map.component';
import { AboutusComponent } from '@pages/aboutus/aboutus.component';
import { WhySmartComponent } from '@pages/why-smart/why-smart.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

// DIRECTIVES
import { FormValidateDirective } from '@directives/form-validate.directive';

// SERVICES
import { ApiJsonService } from '@services/api-json.service';
import { CommonsService } from '@services/commons.service';

// PIPES
import { SafedomPipe } from '@pipes/safedom.pipe';
import { NoimagePipe } from '@pipes/noimage.pipe';

// ENVIRONMENTS
import { environment } from "@environments/environment.prod";

// FULL - REDUX
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReduces } from "@redux/app.reducers";

// LIBRERIAS INSTALADAS
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    FloatComponent,
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
    HomeComponent,
    ProductsComponent,
    PlanesComponent,
    ResourcesCenterComponent,
    HelpCenterComponent,
    HelpCenterDetailComponent,
    FaqComponent,
    NewsComponent,
    NewsDetailComponent,
    ContactusComponent,
    PrivacyPoliticsComponent,
    LegalTermsComponent,
    RelatedSitesComponent,
    SiteMapComponent,
    AboutusComponent,
    WhySmartComponent,
    NotFoundComponent,
    FormValidateDirective,
    SafedomPipe,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    SlickCarouselModule,
    // NgxPageScrollCoreModule,
    StoreModule.forRoot(appReduces, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    ApiJsonService,
    CommonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
