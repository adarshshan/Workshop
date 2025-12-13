import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../services/product';
import { tap } from 'rxjs';

export interface State {
  products: any[];
  loading: boolean;
  name: string;
}

const initialState: State = {
  products: [],
  loading: false,
  name: 'Adarsh C',
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly state = signal<State>(initialState);

  // Expose parts of the state as public computed signals or readonly signals
  public readonly products = computed(() => this.state().products);
  public readonly loading = computed(() => this.state().loading);
  public readonly name = computed(() => this.state().name);

  constructor(private productService: Product) {}

  // Method to load products
  loadProducts() {
    // If products are already loaded or we are already loading, don't fetch again
    if (this.state().products.length > 0 || this.state().loading) return;

    // Set loading state to true
    this.state.update((state) => ({ ...state, loading: true }));

    // Fetch products and update the state
    this.productService
      .getProducts()
      .pipe(
        tap((products) => {
          this.state.update((state) => ({
            ...state,
            products: products,
            loading: false,
          }));
        })
      )
      .subscribe();
  }
}
