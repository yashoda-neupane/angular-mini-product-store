import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0.1, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/^https?:\/\/[^\s/$.?#].[^\s]*$/)]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.isSubmitting = true;
      const payload: Product = {
        id: 0, // Included for type consistency, ignored by API
        ...this.productForm.value
      };

      this.http.post<Product>('https://fakestoreapi.com/products', payload).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          this.isSubmitting = false;
          this.productForm.reset({ price: 0.1 }); 
          this.router.navigate(['/']); 
        },
        error: (error) => {
          console.error('Error adding product:', error);
          this.isSubmitting = false;
          alert('Failed to add product. Please try again.');
        }
      });
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.productForm.get(field);
    return control ? (control.touched || control.dirty) && control.invalid : false;
  }

}
