import { Injectable } from "@nestjs/common";
import { Register } from "./register.model";

@Injectable()
export class RegisterService {
    regsiter : Register[] = []

    insertuser(name: string,email: string, password: string, phone_no:number) {
        const newUser = new Register(name, email, password, phone_no)
        this.regsiter.push(newUser)
        return "successfully user Registered"
    }

    fetchalluser() {
        return [...this.regsiter]
    }
}