import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl = 'http://host1.open.uom.lk:8000'

  constructor(http: HttpClient) { }
}
