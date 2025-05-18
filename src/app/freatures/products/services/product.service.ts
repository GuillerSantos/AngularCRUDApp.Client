import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    
    constructor() {}

    private http = inject(HttpClient);
    private apiUrl = environment.apiURL + '/api/products';

    get(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    create(product: Product): Observable<any> {
        return this.http.post(this.apiUrl, product, {params: product as any});
    }

    update(product: Product): Observable<any> {
        return this.http.put(this.apiUrl, product, {params: product as any});
    }

    delete(id: string): Observable<any> {
        return this.http.delete(this.apiUrl, {params: {id}});
    }
}