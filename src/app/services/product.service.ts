import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  
  noAuthHeader = {headers: new HttpHeaders({NoAuth: 'True'})};
AuthHeader = {headers: new HttpHeaders().set('Authorization',
`Bearer ${localStorage.getItem('token')}`)};

  constructor(private http: HttpClient ) { }

  
  login(credentials) {
    return this.http.post(environment.apiBaseUrl  + '/login',
     credentials);
  }

  createPoduct(product){
    return this.http.post(environment.apiBaseUrl + '/create-product', product, this.AuthHeader);
  }

  getAllPoducts(){
    return this.http.get(environment.apiBaseUrl + '/get-all-products');
  }

  updatePoducts(product){
    return this.http.put(environment.apiBaseUrl + '/update-product', product);
  }
}
