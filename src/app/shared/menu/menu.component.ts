import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() sidenav!: MatSidenav;

  user$ = null as unknown as Observable<User | null>; // rövid megoldás

  constructor(private authService: AuthService) {
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    this.user$ = this.authService.user$ as Observable<User | null>;
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  logout() {
    this.authService.logout();
    this.closeMenu();
  }
}
