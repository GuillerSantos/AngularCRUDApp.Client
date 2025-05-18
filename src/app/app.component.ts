import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './freatures/products/services/product.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUDApp.Client';

  // Access though this property from html

  // Assignning that value into this property
  products: any[] = [];

  ProductService = inject(ProductService);

  // Getting Response from my Web API
  constructor(){
    this.ProductService.get().subscribe(products => {
      this.products = products;
    });
  }
}
