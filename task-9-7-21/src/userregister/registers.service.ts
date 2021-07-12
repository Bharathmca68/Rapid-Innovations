import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Register } from "./register.model";
import * as EmailValidator from 'email-validator';

@Injectable()
export class RegisterService {
    regsiter: Register[] = []

    constructor(@InjectModel('User') private readonly UserModel: Model<Register>) { }
    async insertuser(name: string, email: string, password: string, phone_no: number) {
        const newUser = await new this.UserModel({ name, email, password, phone_no })
        newUser.save()
        return newUser
    }

    async fetchalluser() {
        const allUser = await this.UserModel.find()
        return allUser
    }

    async Login(UL_email: string, UL_password: string) {
        const verify = EmailValidator.validate(UL_email);
        const Userlog = await this.UserModel.find({
            email: UL_email,
            password: UL_password
        })

        if (verify == true && Userlog.length > 0) {
            return "successfully logged In"
        } else {
            return "user not found || please enter a valid email id"
        }
        // let Userlog
        // if (verify == true) {
        //     try {
        //         Userlog = await this.UserModel.find({
        //             email: UL_email,
        //             password: UL_password
        //         })
        //     } catch (error) {
        //         throw new NotFoundException('could not find user')
        //     }
        //     if (Userlog.length > 0) {
        //         return "successfully logged in"
        //     } else {
        //         return "no user found"
        //     }

        // } else {
        //     return "invalid email address"
        // }

    }

    async updatepass(id: string, pass: string) {
        const setpass = await this.findmail_id(id)
        setpass.password = pass
        setpass.save()
        return setpass
    }


    private async findmail_id(id: string): Promise<Register> {
        let newpass
        try {
            newpass = await this.UserModel.findById(id)
        } catch (error) {
            throw new NotFoundException('could not find product')
        }
        return newpass
    }
}