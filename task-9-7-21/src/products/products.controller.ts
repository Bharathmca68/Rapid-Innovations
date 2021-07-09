import { Body, Param } from "@nestjs/common";
import { Controller, Post,Get } from "@nestjs/common";
import { ProductsServices } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productservices : ProductsServices ){}
    @Post()
    addProducts(
        @Body('title') prodTitle : string,
        @Body('des') prodDesc : string,
        @Body('price')prodPrice : number
    ) { 
        const generatedID = this.productservices.insertProduct(prodTitle, prodDesc, prodPrice)
        return {id :generatedID}
    }

    @Get()
    getAllProduct() {
        return {productfetched:  this.productservices.fetchallProduct()}
    }

    @Get(':id')
    get_product_by_Id(@Param('id') p_id:string){
        return this.productservices.fetch_product_by_id(p_id)
    }

}