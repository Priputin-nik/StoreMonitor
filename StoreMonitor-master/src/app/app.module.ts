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

@NgModule({
  declarations: [	
    AppComponent,
    WrapperComponent,
    BasketComponent,
    ProductListComponent,
    HeaderComponent,
    ThingPageComponent,
      AuthorizationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
