"use server"


import { redirect } from "next/navigation"
import { addProduct } from "@/src/lib/product-db"


export type Error = {
    title?: string,
    price?: string,
    description?: string
}

export type FormState = {
    error: Error
}


export async function handleAddProduct(prevState:FormState,formData: FormData) {
    const title = formData.get("title") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;

    const error: Error = {}
    if (!title) {
        error.title = "Title is Required"
    }
    if (!price) {
        error.price = "Price is Required"
    }
    if (!description) {
        error.description = "Description is Required"
    }

    if (Object.keys(error).length > 0) {
        return { error }
    }
    await addProduct(title, price, description)
    redirect("/product-db")
}