import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(public auth: Auth, private router: Router) { // 🔄 auth most már public
    onAuthStateChanged(this.auth, user => {
      this.userSubject.next(user);
    });
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/home']);
    });
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  get currentUserId(): string | null {
    return this.auth.currentUser?.uid || null;
  }
}
