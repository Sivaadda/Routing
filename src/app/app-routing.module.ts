import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Container/home/home.component';
import { UsersComponent } from './Container/users/users.component';
import { UserscartComponent } from './Container/userscart/userscart.component';
import { ProductsComponent } from './Container/products/products.component';
import { CurdoperationComponent } from './Container/curdoperation/curdoperation.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'users', component:UsersComponent
  },
  {
    path:'user/:id', component:UserscartComponent
  },
  {
    path:"products", component:ProductsComponent
  },
  {
    path:"curd", component:CurdoperationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
