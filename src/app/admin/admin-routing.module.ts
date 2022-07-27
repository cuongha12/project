import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdproductComponent } from './content/adproduct/adproduct.component';
import { EditproductComponent } from './content/editproduct/editproduct.component';
import { HomecontentComponent } from './content/homecontent/homecontent.component';
import { ProductsComponent } from './content/products/products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: HomecontentComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'add-product', component: AdproductComponent },
      { path: 'edit-product/:id', component: EditproductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
