import { getProducts } from "@/src/lib/product-db";
import ProductsPageClient from "./ProductsPageClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products = await getProducts(query);

  return (
    <ProductsPageClient products={JSON.parse(JSON.stringify(products))} />
  );
}
