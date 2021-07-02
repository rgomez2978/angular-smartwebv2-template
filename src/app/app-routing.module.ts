// MODULES
import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

// PAGES
import { HomeComponent } from '@pages/home/home.component';
import { ProductsComponent } from '@pages/products/products.component';
import { PlanesComponent } from '@pages/planes/planes.component';
import { ResourcesCenterComponent } from '@pages/resources-center/resources-center.component';
import { HelpCenterComponent } from '@pages/help-center/help-center.component';
import { HelpCenterDetailComponent } from '@pages/help-center-detail/help-center-detail.component';
import { NewsComponent } from '@pages/news/news.component';
import { NewsDetailComponent } from '@pages/news-detail/news-detail.component';
import { ContactusComponent } from '@pages/contactus/contactus.component';
import { LegalTermsComponent } from '@pages/legal-terms/legal-terms.component';
import { PrivacyPoliticsComponent } from '@pages/privacy-politics/privacy-politics.component';
import { RelatedSitesComponent } from '@pages/related-sites/related-sites.component';
import { SiteMapComponent } from '@pages/site-map/site-map.component';
import { AboutusComponent } from '@pages/aboutus/aboutus.component';
import { WhySmartComponent } from '@pages/why-smart/why-smart.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "products/:id", component: ProductsComponent },
  { path: "planes", component: PlanesComponent },
  { path: "resources", component: ResourcesCenterComponent },
  { path: "resources/help", component: HelpCenterComponent },
  { path: "resources/help/:id", component: HelpCenterDetailComponent },
  { path: "resources/news", component: NewsComponent },
  { path: "resources/news/:id", component: NewsDetailComponent },
  { path: "resources/faqs", component: ResourcesCenterComponent },
  { path: "contacts", component: ContactusComponent },
  { path: "privacy-policies", component: PrivacyPoliticsComponent },
  { path: "legal-terms", component: LegalTermsComponent },
  { path: "related-sites", component: RelatedSitesComponent },
  { path: "site-map", component: SiteMapComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "whysmart", component: WhySmartComponent },
  { path: "**", component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
