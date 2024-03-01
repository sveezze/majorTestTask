import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products-component/products.component';
import { RequestsComponent } from './components/requests-component/requests-component.component';
import { ReadyRequestsComponent } from './components/ready-requests/ready-requests.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'requests-made',
    component: ReadyRequestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
