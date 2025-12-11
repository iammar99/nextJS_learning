import { deleteProduct } from "@/src/lib/product-db";

export async function POST(request: Request) {
  try {
    const { id } = await request.json(); 
    if (!id) {
      return new Response("Missing product ID", { status: 400 });
    }
    const product = await deleteProduct(id);
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("API ERROR:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
