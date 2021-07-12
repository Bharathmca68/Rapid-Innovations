import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.model";
const short = require('short-uuid');


@Injectable()
export class ProductsServices {
    products: Product[] = [];

    constructor(@InjectModel('Product') private readonly ProductModel: Model<Product>) { }
    async insertProduct(title: string, des: string, price: number) {

        const newProduct = new this.ProductModel({
            title: title,
            des: des,
            price: price
        })
        const result = await newProduct.save()
        // console.log(result)
        return result
    }

    async fetchallProduct() {
        const result = await this.ProductModel.find().exec()
        if (result.length != 0)
        // console.log(result)
        {
            return result.map((prod) => ({
                id: prod.id,
                title: prod.title,
                des: prod.des,
                price: prod.price
            }))
        } else {
            return "no Products to fetch...!"
        }

    }

    async fetch_product_by_id(p_id: string) {
        const product = await this.findProduct_id(p_id);
        return { id: product.id, title: product.title, des: product.des, price: product.price }
    }

    async updateprod(p_id: string, title: string, des: string, price: number) {
        const update_prod_info = await this.findProduct_id(p_id);

        if (title) {
            update_prod_info.title = title
        }
        if (des) {
            update_prod_info.des = des
        }
        if (price) {
            update_prod_info.price = price
        }
        return update_prod_info.save();
    }
    async Delete_product(p_id: string) {
        const deletedproduct = await this.ProductModel.deleteOne({ _id: p_id }).exec()
        // console.log(deletedproduct)
        if (deletedproduct.n === 0) {
            throw new NotFoundException('failed to delete the product')
        }
    }

    private async findProduct_id(id: string): Promise<Product> {
        let product
        try {
            product = await this.ProductModel.findById(id)
        } catch (error) {
            throw new NotFoundException('could not find product')
        }
        if (!product) {
            throw new NotFoundException('could not find product')
        }
        return product
    }
}