import { Controller, Body, Post, Get, Patch, Param } from "@nestjs/common"
import { RegisterService } from "./registers.service"



@Controller()
export class RegisterController {

    constructor(private readonly registerservice: RegisterService) { }
    @Post('register')
    async addUser(
        @Body('name') U_name: string,
        @Body('email') U_eamil: string,
        @Body('password') U_password: string,
        @Body('phone_no') U_phone: number

    ) {
        const Message = await this.registerservice.insertuser(U_name, U_eamil, U_password, U_phone)
        return { Message: Message }
    }

    @Get('users')
    async getAllUser() {
        const tempstorage = await this.registerservice.fetchalluser()
        return { List_of_user: tempstorage }
    }

    @Post('login')
    async logginsuccessfully(
        @Body('email') UL_email: string,
        @Body('password') UL_password: string
    ) {
        // console.log(UL_email,UL_password)
        const log_User = await this.registerservice.Login(UL_email, UL_password)
        return log_User
    }

    @Patch('updatepass/:id')
    async update_password(
        @Param('id') id: string,
        @Body('password') pass: string,
    ) {
        return { Message: "Password Updated Successfully...!", UpdatedPassword: await this.registerservice.updatepass(id, pass) }
    }
}