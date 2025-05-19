import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsRef;

  constructor(private firestore: Firestore) {
    this.productsRef = collection(this.firestore, 'products'); // 🔧 helyes helyen
  }

  getProducts(): Observable<Product[]> {
    return collectionData(this.productsRef, { idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(product: Product): Promise<any> {
    return addDoc(this.productsRef, product);
  }

  deleteProduct(id: string): Promise<void> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDoc);
  }

  updateProduct(id: string, data: Partial<Product>): Promise<void> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return updateDoc(productDoc, data);
  }

  getProductById(id: string): Observable<Product> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return docData(productDoc, { idField: 'id' }) as Observable<Product>;
  }
}
