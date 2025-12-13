import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  products: Signal<any[]>;
  loading: Signal<boolean>;

  constructor(private store: StoreService) {
    this.products = this.store.products;
    this.loading = this.store.loading;
  }

  ngOnInit(): void {
    this.store.loadProducts();
  }
}
