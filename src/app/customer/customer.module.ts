import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MenuComponent } from './header/menu/menu.component';
import { LogoComponent } from './header/logo/logo.component';
import { TopComponent } from './footer/top/top.component';
import { BottomComponent } from './footer/bottom/bottom.component';
import { HomeComponent } from './page/home/home.component';
import { SearchComponent } from './page/search/search.component';
import { DetailComponent } from './page/detail/detail.component';
import { CartComponent } from './page/cart/cart.component';
import { FormComponent } from './page/form/form.component';
import { LoginComponent } from './page/login/login.component';
import { FootComponent } from './page/foot/foot.component';
import { BagComponent } from './page/bag/bag.component';
import { ManComponent } from './page/man/man.component';
import { WomenComponent } from './page/women/women.component';
import { AccesComponent } from './page/acces/acces.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent,
    TopComponent,
    BottomComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    CartComponent,
    FormComponent,
    LoginComponent,
    FootComponent,
    BagComponent,
    ManComponent,
    WomenComponent,
    AccesComponent,
    TestComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerModule { }
