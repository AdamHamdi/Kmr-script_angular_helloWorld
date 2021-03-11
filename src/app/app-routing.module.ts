import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCompComponent } from './my-comp/my-comp.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"product/:id",component:ProductComponent},
  {path:"add-product",component:AddProductComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports: [RouterModule]
})
export class AppRoutingModule { }
