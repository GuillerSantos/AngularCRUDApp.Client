import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { sharedImports } from "../../../../shared/shared-imports";

@Component({
    standalone: true,
    imports: [sharedImports],
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    constructor(private service: ProductService, private router: Router) {}

    ngOnInit(): void {
        this.service.get().subscribe(data => this.products = data);
    }

    delete(id: string) {
        this.service.delete(id).subscribe(() => {
            this.products = this.products.filter(product => product.id !== id);
        });
    }
}
