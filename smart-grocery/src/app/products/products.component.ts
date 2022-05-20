import { Component, OnInit } from '@angular/core';

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

  products = [
    {
      id: 1,
      name: "Rice",
      description: "White Basmathi Rice imported from Pakistan",
      created: "2022-05-20",
      qty: 100,
      price: "100"
    },
    {
      id: 2,
      name: "Flour",
      description: "White Basmathi Flour",
      created: "Jan 29, 2020",
      qty: 200,
      price: "100"
    },
    {
      id: 3,
      name: "Dhal",
      description: "Red Dhal",
      created: "Jan 28, 2020",
      qty: 20,
      price: "500"
    }
  ]

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
