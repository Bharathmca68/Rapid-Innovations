import * as mongoose from "mongoose"


export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_no: { type: Number, required: true }
})
export class Register extends mongoose.Document {
    id: string
    name: string;
    email: string;
    password: string;
    phone_no: number;
}