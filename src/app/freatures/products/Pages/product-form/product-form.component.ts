import {Component, OnInit} from '@angular/core'
import { ProductService } from '../../services/product.service'
import { ActivatedRoute, Router } from '@angular/router'
import {Product} from '../../models/product.model'
import { sharedImports } from '../../../../shared/shared-imports'

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [sharedImports],
    templateUrl: './product-form.component.html'
})

export class ProductFormComponent implements OnInit {
    product: Product = {
        id: '', 
        productName: '', 
        productDescription: '',
        productCategory: '',
        productPrice: 0,
        productStock: 0,
        productImage: '',
        productBrand: '',
        createdAt: new Date(),
    };
    isEdit = false;

    constructor(
        private service: ProductService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id)
        {
            this.isEdit = true;            
        }
    }

    save() {
        if(this.isEdit)
        {
            this.service.update(this.product).subscribe(() => this.router.navigate(['/products']))
        }
        else
        {
            this.service.create(this.product).subscribe(() => this.router.navigate(['/products']));            
        }

    }
}







