import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /* 
  router2: Router
  constructor(private router2: Router){
    this.router2 = router2
  }
  */
              // Paraméter adattag
  constructor(private router: Router) {
  }

  changePage() {
    this.router.navigateByUrl("/products");
  }
}
