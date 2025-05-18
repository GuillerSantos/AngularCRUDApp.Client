import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./Pages/product-list/product-list.component";
import { ProductFormComponent } from './Pages/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from "./product-rounting.module";

@NgModule({
  imports: [
    ProductListComponent,
    ProductFormComponent,
    ProductCardComponent,
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
})
export class ProductModule {}
