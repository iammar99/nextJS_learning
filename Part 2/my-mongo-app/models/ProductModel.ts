import mongoose from 'mongoose';
import { title } from 'process';

mongoose.connect('mongodb://127.0.0.1:27017/next_js')


const productSchema = new mongoose.Schema({
    product_id: Number,
    price: Number,
    title: String,
    description: String,
})

export const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

