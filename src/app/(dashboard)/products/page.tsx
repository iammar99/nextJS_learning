import Link from "next/link"

export default function Product() {
    const dynamic: number = 12
    return (
        <>
            <h1>Product</h1>
            <ol>
                <li><Link href={"/products/1"}>Product 1</Link></li>
                <li><Link href={"/products/2"} replace>Product 2</Link></li>
                <li><Link href={"/products/3"}>Product 3</Link></li>
                <li><Link href={`/products/${dynamic}`}>Product Random</Link></li>
            </ol>
        </>
    )
}