import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }

}
