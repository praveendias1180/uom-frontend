import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ngOnInit(): void {}

  onSubmit() {
    const values = this.productFrom.value as Product;
    values.createdDate = new Date().toDateString();
    this.productService.addProduct(values).subscribe(res => this.productFrom.reset() )  
  }

  constructor(private fb: FormBuilder,
    private productService: ProductService) {}

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
  });

  get f() {
    return this.productFrom.controls;
  }

}
