import { updateProduct } from "@/src/lib/product-db";

export async function POST(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const body = await request.json();

        const { title, price, description } = body;

        const product = await updateProduct(id, title, price, description);

        return new Response(JSON.stringify(product), { status: 200 });
    } catch (error) {
        console.error("API ERROR:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
