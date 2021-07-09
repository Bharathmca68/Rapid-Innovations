import { Injectable,NotFoundException } from "@nestjs/common";
import { Register } from "./register.model";

@Injectable()
export class RegisterService {
    regsiter : Register[] = []

    insertuser(name: string,email: string, password: string, phone_no:number) {
        const newUser = new Register(name, email, password, phone_no)
        this.regsiter.push(newUser)
        return " user Registered successfully"
    }

    fetchalluser() {
        return [...this.regsiter]
    }
    
    Login(UL_email: string, UL_password : string) {
            const user_logged =this.regsiter.find((use)=>{
                use.email = UL_email,
                use.password = UL_password
            }) 
            if(!user_logged){
                throw new NotFoundException('could not find user')
            }
            return {...this.regsiter}
     }

}