import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    {
      path: 'products',
      loadChildren: () =>
        import('./freatures/products/product.module').then((m) => m.ProductModule),
    },
  ];
  
