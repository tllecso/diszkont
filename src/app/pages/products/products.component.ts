import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { PricePipe } from '../../shared/pipes/price.pipe';
import { ShortenPipe } from '../../shared/pipes/shorten.pipe';
import { Product } from '../../models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PricePipe,
    ShortenPipe,
    ProductFilterComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).then(() => {
      alert(`✅  "${product.name}" Added to the cart`);
    }).catch(error => {
      alert('❌ Error during activity ' + error.message);
    });
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  onFilterChanged(filterText: string): void {
    const lower = filterText.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(lower)
    );
  }
}
