import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ProductListComponent } from "./Pages/product-list/product-list.component";
import {ProductFormComponent} from './Pages/product-form/product-form.component';

const routes: Routes = [
    {path: '', component: ProductListComponent },
    {path: 'edit/:id', component: ProductFormComponent},
    {path: 'create', component: ProductFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}