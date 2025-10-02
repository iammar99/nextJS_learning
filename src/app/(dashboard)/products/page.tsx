"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Product() {
    const dynamic: number = 12
    const router = useRouter() 

    const handleClick = () => {
        console.log("placing order")
        router.push("/")    
    }
    return (
        <>
            <h1>Product</h1>
            <ol>
                <li><Link href={"/products/1"}>Product 1</Link></li>
                <li><Link href={"/products/2"} replace>Product 2</Link></li>
                <li><Link href={"/products/3"}>Product 3</Link></li>
                <li><Link href={`/products/${dynamic}`}>Product Random</Link></li>
            </ol>
            <button onClick={handleClick} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 active:scale-95 transition">Place Order</button>
        </>
    )
}