import { Product } from './../../interfaces/product';
import { ProductService } from './../../services/product.service';
import { AddProductComponent } from './../add-product/add-product.component';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionsService } from 'src/app/services/transactions.service';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
products: Product;
reference: string;
trans_id: string;
gtpay_hash;
showform1 = true;
showform2 = false;

  constructor(private modalController: ModalController, public userService: UserService,
              private productService: ProductService,
              public transService: TransactionsService) { }
              
  paymentPropery = {customer: '', amount: 0, memo:''}

  ngOnInit() {
    this.getAllProduct();
    this.paymentPropery.customer = this.userService.getUser();
    this.trans_id = `${Math.ceil(Math.random() * 10e13)}`;
    
  }

  getAllProduct(){
    console.log('getting product')
    this.productService.getAllPoducts().subscribe(
      res => {
        console.log(res['products']);
        this.products = res['products'];
      }
    );
  }


  closeModal(){
    this.modalController.dismiss();
  }

    
  async addProduct(){
    const modal = await this.modalController.create({
      component: AddProductComponent } );
    modal.onDidDismiss().then(()=> {
           console.log('modal dismiss..');
           this.getAllProduct();
           });
    return await modal.present();
   }

   payNow(form){
    console.log('props',form);
    this.transService.gtpay_cust_name = this.paymentPropery.customer;
    this.transService.gtpay_cust_id = localStorage.getItem('user_id');
    this.transService.gtpay_tranx_memo = this.paymentPropery.memo;
    this.transService.gtpay_tranx_amt = this.paymentPropery.amount * 100;
    this.transService.gtpay_tranx_id= this.trans_id;
    this.gtpay_hash = sha512.sha512(this.transService.gtpay_mert_id +
      this.transService.gtpay_tranx_id +  this.transService.gtpay_tranx_amt+
      this.transService.gtpay_tranx_curr+ this.transService.gtpay_cust_id+
      this.transService.gtpay_tranx_noti_url+ this.transService.$hashkey);
    console.log(this.transService);
    console.log(this.gtpay_hash);
    this.showform1 = false;
    this.showform2 = true;

  }

  confirmPay(form, event){
    console.log('form confiremed', event);
      event.target.submit;
  }
}
