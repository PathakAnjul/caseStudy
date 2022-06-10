import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  
  {
    path: 'floating-banner',
    loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'count-down-timer',
    loadChildren: () => import('./count-downtimer/count-downtimer.module').then(m => m.CountDowntimerModule)
  },
  {
    path: 'count-down-timer-2',
    loadChildren: () => import('./count-downtimer2/count-downtimer2.module').then(m => m.CountDowntimer2Module)
  },
  {
    path: 'sorted-list',
    loadChildren: () => import('./sorting-list/sorting-list.module').then(m => m.SortingListModule)
  },
  {
    path: 'dynamic-scroll',
    loadChildren: () => import('./dynamic-loading/dynamic-loading.module').then(m => m.DynamicLoadingModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

