import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BasketComponent } from './basket/basket.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ThingPageComponent } from './thing-page/thing-page.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FilterComponent } from './filter/filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { NewSliderComponent } from './new-slider/new-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    BasketComponent,
    ProductListComponent,
    HeaderComponent,
    ThingPageComponent,
      AuthorizationComponent,
      FilterComponent,
      NewSliderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatTableModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
