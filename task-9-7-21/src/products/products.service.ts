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

    fetch_product_by_id(p_id:string){
        //syntax supported by ts and in modern js
       const product = this.findProduct_id(p_id);
        return {...product}
    }

    updateprod(p_id:string,title: string, des: string, price: number){
        const [product,index] = this.findProduct_id(p_id);
        const update_prod_info = {...product}
        
        if(title){
            update_prod_info.title = title
        }
        if(des){
            update_prod_info.des = des
        }
        if(price){
            update_prod_info.price = price
        }
        this.products[index] = update_prod_info

    }

    private findProduct_id(id:string): [Product, number]{
        const productIndex = this.products.findIndex((prod)=> prod.id === id);
        const product = this.products[productIndex]
        if(!product) { 
            throw new NotFoundException('could not find product')
        }
        return [product, productIndex]
    }
}