import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ThingPageComponent } from './thing-page/thing-page.component';


const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'products/:productId', component: ThingPageComponent },
  { path: '', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
