import { ProductService } from './../../services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private modalController: ModalController,public userservice: UserService,
              protected sanitizer: DomSanitizer, private productService: ProductService) { }
loading  = false;
safeImage;
  productProps = { name:'', price:'', description: '', image:null }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

  submitProduct(){
    let formData = new FormData();
    formData.append('name', this.productProps.name);
    formData.append('price', this.productProps.price);
    formData.append('description', this.productProps.description);
    formData.append('image', this.productProps.image);
    console.log(formData);
    this.productService.createPoduct(formData).subscribe(
      res => {
        console.log(res);
        this.closeModal();
      },
      err => {
        console.log(err);
        this.userservice.toast('Error', err.error.message, 2000);
      }
    );
  }

  selectImage(event){
    console.log(event.target.files[0]);
    this.productProps.image = event.target.files[0];
    // this.safeImage = this.sanitizer.bypassSecurityTrustResourceUrl(event.target.value);
  }

}
