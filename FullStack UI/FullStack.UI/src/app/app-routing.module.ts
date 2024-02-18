import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { ProductsComponent } from './components/products-component/products.component';
import { ProductsCountComponent } from './components/products-count/products-count.component';
import { RequestsComponentComponent } from './components/requests-component/requests-component.component';
import { SuppliersComponentComponent } from './components/suppliers-component/suppliers-component.component';
import { WarehouseComponentComponent } from './components/warehouse-component/warehouse-component.component';
import { SalesComponentComponent } from './components/sales-component/sales-component.component';
import { ReviewComponentComponent } from './components/review-component/review-component.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponentComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/count',
    component: ProductsCountComponent
  },
  {
    path: 'requests',
    component: RequestsComponentComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponentComponent
  
  },
  {
    path: 'warehouse',
    component: WarehouseComponentComponent
  },
  {
    path: 'sales',
    component: SalesComponentComponent
  },
  {
    path: 'review',
    component: ReviewComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
