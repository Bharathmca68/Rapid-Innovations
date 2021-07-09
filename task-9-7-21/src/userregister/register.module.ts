import { Module } from "@nestjs/common";
import { RegisterController } from "./userregister.controller";
import { RegisterService } from "./registers.service";



@Module({
    controllers : [RegisterController],
    providers : [RegisterService]
})
export class RegisterModule { }