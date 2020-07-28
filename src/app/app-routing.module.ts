import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { TabComponent } from './components/tab/tab.component';
import { PaynowComponent } from './components/paynow/paynow.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
 
  
  {
    path:'tabs', component: TabComponent,
    children: [
      {
        path:'create-user', component: CreateUserComponent,
      },
      {
        path:'products', component: ProductComponent, canActivate:[AuthGuard],
      },
      {
        path:'transactions', component: TransferComponent, canActivate:[AuthGuard],
      },
      {
        path:'transfer', component: TransferComponent, canActivate:[AuthGuard],
      },
      {
        path:'paynow', component: PaynowComponent, canActivate:[AuthGuard],
      },
      {
        path:'dashboard', component: DashboardComponent,
    },
    ] 
  },
 
  
 
 
  {
    path: 'first_page',
    loadChildren:  () => import('./pages/first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'home',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
