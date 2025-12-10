import { productModel } from "@/models/ProductModel";

const Product = productModel;
import mongoose from "mongoose";


// =========================| Get All Products |=========================

export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (query) {
    return Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).exec();
  }

  return Product.find().exec();
}


// =========================| Get Single Product |=========================


export async function getProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return await Product.findById(id);


}


// =========================| Add Product |=========================


export async function addProduct(
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return Product.create({
    title,
    price,
    description
  });
}

// =========================| Update Product |=========================


export async function updateProduct(
  id: string,
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return Product.findOneAndUpdate(
    { _id: id },
    {
      title,
      price,
      description,
    },
    { new: true }
  );
}




// =========================| Delete Product |=========================

export async function deleteProduct(
  id: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return Product.findOneAndDelete({ _id: id });
}


