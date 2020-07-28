import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  gtpay_cust_name = '';
   gtpay_mert_id  = '';
   gtpay_cust_id  = '';
  $hashkey  = ''; 
  gtpay_echo_data  = ''; 
  gtpay_gway_name  = '';
  gtpay_tranx_curr  =  '';
  gtpay_tranx_amt = null ;
  gtpay_tranx_memo = '';
  gtpay_tranx_noti_url = ''; 
  gtpay_tranx_id  = '';
   gtpay_hash = '';

  constructor(private http: HttpClient) { }




  payNow(paymentProps){
    console.log('sending trans')
   return this.http.post('https://ibank.gtbank.com/GTPay_/Tranx.aspx', paymentProps);
  }

  processTrans(transaction){
    return this.http.put(environment.apiBaseUrl + '/process-trans', transaction);
  }

 
}
