import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { PricePipe } from './shared/pipes/price.pipe';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { AuthService } from './shared/services/auth.service'; // 🔽 Hozzáadva
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router'; // Navigációhoz
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MenuComponent,
    MatSliderModule,
    PricePipe,
    ShortenPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'diszkont';

  user$: Observable<User | null>; // 🔽 Bejelentkezett user figyelése

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user$ = this.authService.user$;
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  logout(): void {
    this.authService.logout(); // 🔽 Kijelentkeztet
  }
}
