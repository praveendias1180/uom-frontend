import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  public product!: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let selectedProductId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(selectedProductId).subscribe((res) => {
      this.product = res.data;
    });
  }
}
