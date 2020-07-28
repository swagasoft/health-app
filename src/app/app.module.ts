import { Http } from '@angular/http';
import { ApiService } from './proivder/api.service';
import { ConfigService } from './proivder/config.service';
import { MaterialModule } from './material/material.module';
import { ConfirmPayComponent } from './components/confirm-pay/confirm-pay.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductComponent } from './components/product/product.component';
import { TabComponent } from './components/tab/tab.component';
import { TransactionsService } from './services/transactions.service';
import { PaynowComponent } from './components/paynow/paynow.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth-interceptor';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestService } from './services/test.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent, HomepageComponent,
    HeaderComponent, DashboardComponent, CreateUserComponent, TransferComponent,
  TransactionComponent, AccountComponent, SignupComponent, PaynowComponent,TabComponent,
    ProductComponent, AddProductComponent,ConfirmPayComponent],
  entryComponents: [SignupComponent,AddProductComponent,ConfirmPayComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    UserService,
    ProductService,
    AuthInterceptor,
    AuthGuard,
    ConfigService,
    ApiService,
    Http,
    HttpClient,
    TransactionsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
