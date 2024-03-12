import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products-component/products.component';
import { RequestsComponent } from './components/requests-component/requests-component.component';
import { RequestsMadeComponent } from './components/requests-made/requests-made.component';
import { CommentsComponent } from './components/comments/comments.component';

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
    component: RequestsMadeComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
