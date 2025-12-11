import { getProduct } from "@/src/lib/product-db";
import ProductDetailPage from "./productPageClient";

type Product = {
    _id: string;
    title: string;
    price: number;
    description: string | null;
};

export default async function page({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const product: Product = await getProduct(id);

    if (!product) {
        return <h1 className="text-5xl font-bold text-center m-auto mt-16">No Product Found</h1>
                ;
    }

    return <ProductDetailPage product={JSON.parse(JSON.stringify(product))} />;
}
