import { Component, OnInit, Signal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'app-about',
  imports: [NgForOf],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  products: Signal<any[]>;
  name: Signal<string>;

  constructor(private store: StoreService) {
    this.products = this.store.products;
    this.name = this.store.name;
  }

  ngOnInit(): void {
    this.store.loadProducts();
  }
}
