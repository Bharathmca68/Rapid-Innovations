import { Controller,Body,Post,Get } from "@nestjs/common"
import { RegisterService } from "./registers.service"

@Controller('register')
export class RegisterController {

    constructor(private readonly registerservice : RegisterService ){}
    @Post()
    addProducts(
        @Body('name') U_name : string,
        @Body('email') U_eamil : string,
        @Body('password')U_password : string,
        @Body('phone_no')U_phone: number

    ) { 
        const generatedID = this.registerservice.insertuser(U_name, U_eamil, U_password,U_phone)
        return {id :generatedID}
    }

    @Get()
    getAllProduct() {
        return {productfetched:  this.registerservice.fetchalluser()}
    }
}