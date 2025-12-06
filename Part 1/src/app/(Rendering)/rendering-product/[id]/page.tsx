import Loader from "@/Components/loader"
import Product from "@/Components/product"
import ProductReviews from "@/Components/productReview"
import { Suspense } from "react"

export const dynamicParams = false

export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" }
    ]
}


export default async function page(
    { params }: { params: Promise<{ id: string }> }
) {

    const { id } = await params
    return (
        <main className="bg-zinc-800 text-white h-screen">
            <div className="p-4 m-4 bg-gray-100 border border-gray-300 rounded-xl shadow-sm text-gray-800 text-lg font-medium">
                Product #{id} rendered at{" "}
                <span className="text-blue-600 font-semibold">
                    {new Date().toLocaleTimeString()}
                </span>
            </div>
            <Suspense fallback={<Loader/>}>
                <Product />
            </Suspense>
            <Suspense fallback={<Loader/>}>
                <ProductReviews />
            </Suspense>
        </main>
    )
}
