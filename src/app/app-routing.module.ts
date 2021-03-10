import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCompComponent } from './my-comp/my-comp.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:MyCompComponent},
  {path:"product",component:ProductComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 


exports: [RouterModule]
})
export class AppRoutingModule { }
