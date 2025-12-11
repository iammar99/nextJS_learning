import { addProduct } from "@/src/lib/product-db"

export async function POST(request:Request){
    const body = await request.json()
    const {title, price, description} = body
    const product = await addProduct(title, price, description)
    return new Response(JSON.stringify(product),{
        status:201
    })
}