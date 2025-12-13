import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  products: any[] = [];
  loading: boolean = true;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.loading = true;
    this.homeService.getProduct().subscribe({
      next: (res: any[]) => {
        console.log('........res.......');
        console.log(res);
        this.products = res;
        this.loading = false;
      },
      error: (error) => {
        console.log(error as Error);
        this.loading = false;
      },
    });
  }
}
