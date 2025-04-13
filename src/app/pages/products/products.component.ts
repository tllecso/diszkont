import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Bumbu Original', description: 'A smooth, craft rum inspired by the Caribbean’s 16th-century traditions, infused with natural spices.', price: 12000, imageUrl: 'images/bumbu.jpg'},
    { id: 2, name: 'Diplomatico', description: 'Venezuelan rum known for its rich, sweet, and complex flavor profile, perfect for sipping.', price: 14000, imageUrl: 'images/diplomatico.jpg' },
    { id: 3, name: 'Zacapa ', description: 'Guatemalan rum aged in the highlands, offering a velvety, sweet, and oak-influenced profile.', price: 20000, imageUrl: 'images/zacapaxo.jpg' },
    { id: 4, name: 'Plantation XO', description: 'A blend of rums from across the Caribbean, often finished in unique casks (cognac, sherry).', price: 18000, imageUrl: 'images/plantationxo.jpg' },
    { id: 5, name: 'El Dorado XII', description: ' Legendary Guyanese rum aged in oak barrels, famous for its deep, molasses-rich taste.', price: 10000, imageUrl: 'images/eldorado12.jpg' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
