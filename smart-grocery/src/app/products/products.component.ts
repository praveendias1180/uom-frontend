import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showAddProduct: boolean = false;
  public isRowSelected: boolean = false;
  public rowIndex: number = 0;

  public products: Product[] = []

  public product_clicked(seletedRow: number){
    this.rowIndex = seletedRow
    this.isRowSelected = true
  }

  public showAddProducts(){
    this.showAddProduct = true;
  }
  
  public hideAddProducts(){
    this.showAddProduct = false;
  }
}
