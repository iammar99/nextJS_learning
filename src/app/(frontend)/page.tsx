import Link from "next/link"


export default function Home() {
   return (
      <>
         <h1>Home</h1>
         <Link className="text-blue-600 hover:underline" href={"/blog"}>Blog</Link>
         <br />
         <Link className="text-blue-600 hover:underline" href={"/products"}>Products</Link>
         <br />
         <Link className="text-blue-600 hover:underline" href={"/login"}>Auth</Link>
         <br />
         <Link className="text-blue-600 hover:underline" href={"/f2/f1"}>F1</Link>
         <br />
         <Link className="text-blue-600 hover:underline" href={"/photo-feed"}>Users</Link>
         <br />
         <Link href={"/articles/breaking-news-123?lang=en"} className="text-blue-600 hover:underline">Read Article in English</Link>
         <br />
         <Link href={"/articles/breaking-news-123?lang=fr"} className="text-blue-600 hover:underline">Read Article in French</Link>
         <br />
         <Link href={"/rendering-product"} className="text-blue-600 hover:underline">Rendering Product</Link>
         <br />
         <Link href={"/interleaving"} className="text-blue-600 hover:underline">Interleaving</Link>
         <br />
         <Link href={"/user-client"} className="text-blue-600 hover:underline">User Client</Link>
      </>
   )
}