import Link from "next/link"


export default function Home() {
   return (
      <>
         <h1>Home</h1>
         <Link href={"/blog"}>Blog</Link>
         <br />
         <Link href={"/products"}>Products</Link>
         <br />
         <Link href={"/login"}>Auth</Link>
         <br />
         <Link href={"/articles/breaking-news-123?lang=en"} className="text-blue-600 hover:underline">Read Article in English</Link>
         <br />
         <Link href={"/articles/breaking-news-123?lang=fr"} className="text-blue-600 hover:underline">Read Article in French</Link>
      </>
   )
}