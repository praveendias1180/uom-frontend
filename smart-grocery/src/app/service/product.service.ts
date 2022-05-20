import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../model/add-product-response.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl = 'http://host1.open.uom.lk:8000'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  addProduct(product: Product): Observable<AddProductResponse>{
    return this.http.post<AddProductResponse>(`${this.baseurl}api/product`, product, this.httpOptions)
  }
}
