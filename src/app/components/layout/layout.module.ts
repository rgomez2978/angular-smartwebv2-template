// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '@components/shared.module';

// COMPONENTS
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { LoadingComponent } from '@layout/loading/loading.component';
import { FloatComponent } from '@layout/float/float.component';

// LIBRERIAS INSTALADAS
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    FloatComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    FloatComponent
  ],
})
export class LayoutModule { }
