import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Container/home/home.component';
import { NavComponent } from './Container/nav/nav.component';

import { UsersListService } from './users-list.service';
import { UsersComponent } from './Container/users/users.component';
import { UserscartComponent } from './Container/userscart/userscart.component';
import { ProductsComponent } from './Container/products/products.component';
import { ProductListService } from './product-list.service';
import { HttpClientModule } from '@angular/common/http';
import { CurdoperationComponent } from './Container/curdoperation/curdoperation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UsersComponent,
    UserscartComponent,
    ProductsComponent,
    CurdoperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersListService, ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
