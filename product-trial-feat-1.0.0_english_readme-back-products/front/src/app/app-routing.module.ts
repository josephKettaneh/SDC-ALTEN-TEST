import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './products/products-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    // loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: { name: 'Products', path: 'products' }
  },
  {
    path: 'admin',
    component: ProductsAdminComponent,
    // loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: { name: 'Admin', path: 'admin' }
  }
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
