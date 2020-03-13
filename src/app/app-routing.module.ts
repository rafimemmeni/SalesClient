import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillDetailComponent } from 'src/app/bill-detail/bill-detail.component';
import { CategoryComponent } from 'src/app/category/category.component';
import { ProductComponent } from 'src/app/product/product.component';


const routes: Routes = [
  { path: 'Bill', component: BillDetailComponent },
  { path: 'Category', 
  component: CategoryComponent ,
  children: [
    {
      path: 'Product/{itemid}', component: ProductComponent 
    }
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
