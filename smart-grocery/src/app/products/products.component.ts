import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public showAddProduct: boolean = false;
  public isRowSelected: boolean = false;
  public rowIndex: number = -1;
  isLoading: boolean = false;
  public products: Product[] = []
  showEditProduct!: boolean;
  selectedProduct!: Product;

  public product_clicked(seletedRow: any, product: Product){
    this.rowIndex = seletedRow
    this.isRowSelected = true
    this.selectedProduct = product
  }

  public showAddProducts(){
    if (this.showEditProduct) {
      this.showEditProduct = false;
    }
    this.showAddProduct = true;
  }
  
  public hideAddProducts(){
    this.showAddProduct = false;
  }

  getProducts(){
    this.isLoading = true;
    this.productService.getProducts().subscribe(res => {
      this.products = res.data
      this.isLoading = false;
    })
  }

  refresh(){
    this.getProducts()
  }

  OpenEditProductView() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
  }

  updateProductList() {
    this.getProducts();
  }

  closeEditView() {
    this.showEditProduct = false;
  }
}
