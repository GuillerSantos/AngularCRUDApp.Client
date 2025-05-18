export interface Product{
    id: string; // Guid represented as a string
    productName: string;
    productDescription: string;
    productPrice: number;
    productStock: number;
    productImage: string;
    productCategory: string;
    productBrand: string;
    createdAt?: Date;
}