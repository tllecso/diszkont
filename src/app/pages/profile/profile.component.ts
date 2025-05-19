import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/services/auth.service';
import { sendPasswordResetEmail } from '@angular/fire/auth';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  resetPassword(): void {
    if (this.user?.email) {
      sendPasswordResetEmail(this.authService.auth, this.user.email)
        .then(() => alert('📧 "A password reset email has been sent to the following address:" ' + this.user!.email))
        .catch(err => alert('❌ Error' + err.message));
    }
  }
}
