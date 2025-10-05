import { notFound } from "next/navigation"

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>
}) {
  const { productId, reviewId } = await params

  if (parseInt(reviewId) > 100) {
    notFound()
  }

  return (
    <h1>
      Review no {reviewId} — Review of Product {productId}
    </h1>
  )
}
