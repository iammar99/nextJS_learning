import Link from "next/link";

export default function page() {
  return (
    <main className="bg-zinc-800 h-screen flex items-center">
      <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-4">
        <Link href={"/"}>&lt;- Home</Link>
        <h1 className="text-2xl font-bold text-gray-800">Product Page</h1>

        <ul className="space-y-2">
          <li>
            <Link
              href="/rendering-product/1"
              className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Product 1
            </Link>
          </li>
          <li>
            <Link
              href="/rendering-product/2"
              className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Product 2
            </Link>
          </li>
          <li>
            <Link
              href="/rendering-product/3"
              className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Product 3
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
