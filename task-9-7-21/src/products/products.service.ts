import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
const short = require('short-uuid');


@Injectable()
export class ProductsServices {
    products : Product[] = [];

    insertProduct(title: string, des: string, price: number){
        const p_id=short.generate()
        const newProduct = new Product(p_id, title, des, price)
        this.products.push(newProduct)
        return p_id 
    }

    fetchallProduct(){
        return [...this.products]
    }

    fetch_product_by_id(product_id:string){
        const product = this.products.find((prod)=> {
            prod.id === product_id
        });
        if(!product) {
            throw new NotFoundException('could not find product')
        }
        return {...product}
    }
}