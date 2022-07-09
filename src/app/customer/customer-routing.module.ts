import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AccesComponent } from './page/acces/acces.component';
import { BagComponent } from './page/bag/bag.component';
import { CartComponent } from './page/cart/cart.component';
import { DetailComponent } from './page/detail/detail.component';
import { FootComponent } from './page/foot/foot.component';
import { FormComponent } from './page/form/form.component';
import { LoginComponent } from './page/login/login.component';
import { ManComponent } from './page/man/man.component';
import { SearchComponent } from './page/search/search.component';
import { WomenComponent } from './page/women/women.component';


import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',component:TestComponent,children:[
    {path:'',component:HomeComponent},
    {path:'foot',component:FootComponent},
    {path:'access',component:AccesComponent},
    {path:'bag',component:BagComponent},
    {path:'women',component:WomenComponent},
    {path:'man',component:ManComponent},
    {path:'search',component:SearchComponent},
    {path:'cart',component:CartComponent},
    {path:'detail/:id',component:DetailComponent},
    {path:'form',component:FormComponent},
    {path:'login',component:LoginComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
