// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@components/shared.module';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { HomeComponent } from '@pages/home/home.component';
import { ProductsComponent } from '@pages/products/products.component';
import { PlanesComponent } from '@pages/planes/planes.component';
import { ResourcesCenterComponent } from '@pages/resources-center/resources-center.component';
import { FaqComponent } from '@pages/faq/faq.component';
import { ContactusComponent } from '@pages/contactus/contactus.component';
import { PrivacyPoliticsComponent } from '@pages/privacy-politics/privacy-politics.component';
import { LegalTermsComponent } from '@pages/legal-terms/legal-terms.component';
import { RelatedSitesComponent } from '@pages/related-sites/related-sites.component';
import { SiteMapComponent } from '@pages/site-map/site-map.component';
import { AboutusComponent } from '@pages/aboutus/aboutus.component';
import { WhySmartComponent } from '@pages/why-smart/why-smart.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    PlanesComponent,
    ResourcesCenterComponent,
    FaqComponent,
    ContactusComponent,
    PrivacyPoliticsComponent,
    LegalTermsComponent,
    RelatedSitesComponent,
    SiteMapComponent,
    AboutusComponent,
    WhySmartComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    PlanesComponent,
    ResourcesCenterComponent,
    FaqComponent,
    ContactusComponent,
    PrivacyPoliticsComponent,
    LegalTermsComponent,
    RelatedSitesComponent,
    SiteMapComponent,
    AboutusComponent,
    WhySmartComponent,
    NotFoundComponent,
  ],
})
export class PagesModule { }
