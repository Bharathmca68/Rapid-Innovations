import * as mongoose from "mongoose"


export const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: Number, required: true },

})
export class Product extends mongoose.Document {
    id: string;
    title: string;
    des: string;
    price: number;
}