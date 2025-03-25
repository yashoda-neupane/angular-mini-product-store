import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = 'https://fakestoreapi.com/products'; // endpoint for fetching all the product list
  
  products = signal<Product[]>([]);

  constructor(private http: HttpClient) {}


  /**
   * Fetches all products and updates the products signal
   * @returns Observable of Product array
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(products => {
        console.log('Received products:', products); // Debug log
        this.products.set(products);
      }),
      catchError(this.handleError)
    );
  }


  /**
   * Handles HTTP errors
   * @param error HttpErrorResponse
   * @returns Error observable
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage = this.getErrorMessage(error);
    console.error('ProductService Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }


  private getErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 0:
        return 'Network error: Please check your internet connection';
      case 404:
        return 'Products not found';
      case 500:
        return 'Server error: Please try again later';
      default:
        return 'An unexpected error occurred';
    }
  }
}
