import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  deleteDoc,
  getDoc
} from '@angular/fire/firestore';
import { Observable, firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  private getCartItemDoc(productId: number) {
    const userId = this.authService.currentUserId;
    return doc(this.firestore, `carts/${userId}/items/${productId}`);
  }

  async addToCart(product: Product): Promise<void> {
    const cartItemRef = this.getCartItemDoc(product.id);
    const docSnap = await getDoc(cartItemRef);
    const quantity = docSnap.exists() ? (docSnap.data() as any).quantity || 0 : 0;
    await setDoc(cartItemRef, { ...product, quantity: quantity + 1 });
  }

  getCartItems(): Observable<any[]> {
    const userId = this.authService.currentUserId;
    const itemsRef = collection(this.firestore, `carts/${userId}/items`);
    return collectionData(itemsRef, { idField: 'id' });
  }

  removeItem(productId: number): Promise<void> {
    return deleteDoc(this.getCartItemDoc(productId));
  }

  async clearCart(): Promise<void> {
    const userId = this.authService.currentUserId;
    const itemsRef = collection(this.firestore, `carts/${userId}/items`);
    const items = await firstValueFrom(collectionData(itemsRef));
    const deletions = (items as any[]).map(item =>
      deleteDoc(this.getCartItemDoc(item.id))
    );
    await Promise.all(deletions);
  }
}
