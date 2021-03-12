import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCompComponent } from './my-comp/my-comp.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [

  {path:"products",component:ProductComponent},
  {path:"",redirectTo:'products', pathMatch:'full'},
  {path:"product/:id",component:UpdateProductComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"my",component:MyCompComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],







exports: [RouterModule]
})
export class AppRoutingModule { }
