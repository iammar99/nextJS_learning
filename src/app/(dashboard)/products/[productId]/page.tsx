"use client"

import { redirect } from "next/navigation";
export default function ProductDetail({
    params
}: {
    params: { productId: string }
}) {

    if (parseInt(params.productId) > 100) {
        redirect("/")
        // return <h1>Product with id {params.productId} is not available</h1>;
    }

    return (
        <h1>Detail of Project {params.productId}</h1>
    )
}   