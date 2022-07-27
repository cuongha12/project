import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductsComponent } from './content/products/products.component';
import { AdproductComponent } from './content/adproduct/adproduct.component';
import { EditproductComponent } from './content/editproduct/editproduct.component';
import { HomecontentComponent } from './content/homecontent/homecontent.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProductsComponent,
    AdproductComponent,
    EditproductComponent,
    HomecontentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
