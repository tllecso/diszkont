import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDividerModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  ngOnInit(): void {
    this.cartItems = [
      {
        id: 1,
        name: 'Plantation XO',
        description: 'A blend of rums from across the Caribbean, often finished in unique casks (cognac, sherry).',
        price: 18000,
        imageUrl: 'images/plantationxo.jpg'
      }
    ];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    alert('Thank you for your purchase!');
    this.cartItems = []; // Empty the cart
  }

  clearCart(): void {
    if (confirm('Are you sure you want to delete the item(s)?')) {
      this.cartItems = [];
    }
  }

  removeItem(item: Product): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }
}
