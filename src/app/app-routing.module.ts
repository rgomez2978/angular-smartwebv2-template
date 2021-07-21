// MODULES
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from "@angular/router";

// PAGES
import { HomeComponent } from '@pages/home/home.component';
import { ProductsComponent } from '@pages/products/products.component';
import { PlanesComponent } from '@pages/planes/planes.component';
import { ResourcesCenterComponent } from '@pages/resources-center/resources-center.component';
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
  {
    path: 'resources/help',
    loadChildren: () => import('@pages/help-center/help.module').then(m => m.HelpModule),
  },
  {
    path: 'resources/news',
    loadChildren: () => import('@pages/news/news.module').then(m => m.NewsModule),
  },
  { path: "resources/faqs", component: ResourcesCenterComponent },
  { path: "policies/privacy", component: PrivacyPoliticsComponent },
  { path: "policies/legal", component: LegalTermsComponent },
  { path: "sites/related-sites", component: RelatedSitesComponent },
  { path: "sites/site-map", component: SiteMapComponent },
  { path: "info/contacts", component: ContactusComponent },
  { path: "info/aboutus", component: AboutusComponent },
  { path: "info/whysmart", component: WhySmartComponent },
  { path: "**", component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
