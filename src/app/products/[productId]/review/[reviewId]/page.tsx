import { notFound } from "next/navigation"
export default function ReviewDetail(
    { params }: {
        params:
        {
            productId: string,
            reviewId: string
        }
    }
) {
    if (parseInt(params.reviewId) > 100) {
        notFound()
    }
    return (
        <h1>Review no {params.reviewId} Review of Product {params.productId} </h1>
    )
}