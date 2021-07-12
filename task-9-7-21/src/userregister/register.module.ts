import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegisterController } from "./userregister.controller";
import { RegisterService } from "./registers.service";
import { UserSchema } from "./register.model";



@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [RegisterController],
    providers: [RegisterService]
})
export class RegisterModule { }