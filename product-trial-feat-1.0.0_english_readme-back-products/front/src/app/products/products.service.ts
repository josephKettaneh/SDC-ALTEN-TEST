// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Product } from './product.class';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {

//     private static productslist: Product[] = null;
//     private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

//     constructor(private http: HttpClient) { }

//     getProducts(): Observable<Product[]> {
//         if( ! ProductsService.productslist )
//         {
//             this.http.get<any>('assets/products.json').subscribe(data => {
//                 ProductsService.productslist = data.data;
                
//                 this.products$.next(ProductsService.productslist);
//             });
//         }
//         else
//         {
//             this.products$.next(ProductsService.productslist);
//         }

//         return this.products$;
//     }

//     create(prod: Product): Observable<Product[]> {

//         ProductsService.productslist.push(prod);
//         this.products$.next(ProductsService.productslist);
        
//         return this.products$;
//     }

//     update(prod: Product): Observable<Product[]>{
//         ProductsService.productslist.forEach(element => {
//             if(element.id == prod.id)
//             {
//                 element.name = prod.name;
//                 element.category = prod.category;
//                 element.code = prod.code;
//                 element.description = prod.description;
//                 element.image = prod.image;
//                 element.inventoryStatus = prod.inventoryStatus;
//                 element.price = prod.price;
//                 element.quantity = prod.quantity;
//                 element.rating = prod.rating;
//             }
//         });
//         this.products$.next(ProductsService.productslist);

//         return this.products$;
//     }


//     delete(id: number): Observable<Product[]>{
//         ProductsService.productslist = ProductsService.productslist.filter(value => { return value.id !== id } );
//         this.products$.next(ProductsService.productslist);
//         return this.products$;
//     }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private productsUrl: string;

    constructor(private http: HttpClient) {
        this.productsUrl = "http://localhost:9090/product";
     }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.productsUrl, product);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.patch<Product>(url, product);
    }

    delete(productId: number): Observable<any> {
        const url = `${this.productsUrl}/${productId}`;
        return this.http.delete(url);
    }
}
