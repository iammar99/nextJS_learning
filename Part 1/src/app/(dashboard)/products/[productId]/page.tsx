import { redirect } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params;

  function generate(count: number): number {
    return Math.floor(Math.random() * count);
  }

  const random = generate(2);

  if (random === 0) {
    console.log("Error");
    throw new Error("Error Loading Product");
  }

  if (parseInt(productId) > 100) {
    redirect("/");
  }

  return <h1>Detail of Product {productId}</h1>;
}
