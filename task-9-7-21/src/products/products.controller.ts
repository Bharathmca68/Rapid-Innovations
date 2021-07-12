import { Body, Delete, Param, Patch } from "@nestjs/common";
import { Controller, Post, Get } from "@nestjs/common";
import { ProductsServices } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productservices: ProductsServices) { }
    @Post()
    async addProducts(
        @Body('title') prodTitle: string,
        @Body('des') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const Details = await this.productservices.insertProduct(prodTitle, prodDesc, prodPrice)
        return { Message: "added Product successfully", Details: Details }
    }

    @Get()
    async getAllProduct() {
        const Products = await this.productservices.fetchallProduct()
        return Products
    }

    @Get(':id')
    get_product_by_Id(@Param('id') p_id: string) {
        return this.productservices.fetch_product_by_id(p_id)
    }

    @Patch(':id')
    async update_product(
        @Param('id') p_id: string,
        @Body('title') prodTitle: string,
        @Body('des') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        return { Message: "Product successfully Updated...!", ProductUpdated: await this.productservices.updateprod(p_id, prodTitle, prodDesc, prodPrice) }
    }

    @Delete(':id')
    async remove_product(
        @Param('id') p_id: string
    ) {
        await this.productservices.Delete_product(p_id)
        return "Product deleted successfully"
    }

}
