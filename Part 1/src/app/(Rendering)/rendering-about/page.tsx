import Link from "next/link"
// import { useState } from "react"

export default function page() {
  
  // const [name , setName] = useState("")
  console.log("Server Side Component")
  return (
    <div>About page <Link href={"/rendering-dashboard"}>Dashboard</Link></div>
  )
}
