import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      catchError((err) => {
        console.error('Error fetching products', err);
        return throwError(() => err);
      })
    );
  }
}
