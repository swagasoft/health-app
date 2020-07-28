import { UserService } from 'src/app/services/user.service';
import { TransactionsService } from './../../services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as sha512 from 'js-sha512';
import { FormGroup, FormControl } from '@angular/forms';
// import * as Crypto from 'crypto';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss'],
})
export class PaynowComponent implements OnInit {
  reference: string;
  trans_id: string;
  gtpay_hash;
  userAmount: number;
  loading;
  showform1 = true;
  showform2 = false;
  transProcess;

  paymentForm  = new FormGroup({
    customer : new FormControl(localStorage.getItem('username')),
    amount: new FormControl(null),
    memo : new FormControl(''),
    trans_id : new FormControl(Math.ceil(Math.random() * 10e13)),
    customer_id : new FormControl(localStorage.getItem('user_id')),
    date : new FormControl( Date.now),
  });
  

  constructor( private modalController: ModalController, public transService: TransactionsService,
               private userService: UserService) { }

  ngOnInit() {
    this.loading = false;
  }

  ionDidViewEnter(){
  console.log('the view fire');
  }

  payNow(form){
    this.transService.processTrans(this.paymentForm.value).subscribe(
     res => {
       this.showform2 = true;
       this.showform1 = false;
       console.log(res);
       this.transService.gtpay_cust_name = res['customer_name'];
       this.transService.gtpay_cust_id = res['customer_id'];
       this.transService.gtpay_echo_data = res['echo_data'];
       this.transService.gtpay_gway_name =  res['gway_name'];
       this.transService.gtpay_mert_id =  res['merchant_id'];
       this.transService.gtpay_tranx_amt =  res['amount'];
       this.userAmount = this.transService.gtpay_tranx_amt / 100;
       this.transService.gtpay_tranx_curr =  res['currency'];
       this.transService.gtpay_tranx_id = res['trans_id'];
       this.transService.gtpay_tranx_memo = res['trans_memo'];
       this.transService.gtpay_tranx_noti_url = res['notify_url'];
       const hashContent = res['gtpay_hash'];
       this.transService.gtpay_hash = hashContent.trim();
       console.log(this.transService.gtpay_hash);
       console.log(this.transService.gtpay_hash.length);
     },
     err => {
       console.log(err);
       this.userService.toast('error!', err.error.message, 2000);
     }
   );
   

  }

  confirmPay(){
    this.loading = true;
    console.log('form confiremed');
      // event.target.submit;
  }


  closeModal(){
    this.modalController.dismiss();
  }
}
