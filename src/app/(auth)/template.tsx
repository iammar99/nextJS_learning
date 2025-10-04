"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks: object[] = [
    { href: "/login", name: "Login" },
    { href: "/register", name: "Register" },
    { href: "/", name: "Home" },
  ]

  const [val , setVal] = useState("")
  const pathname = usePathname()
  return (
    <>
    <input type="text" onChange={(e)=>{setVal(e.target.value)}} 
  className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
      {
        navLinks.map((link: object, index: number) => {
          const isActive = pathname == link.href
          return (
            <span key={index}>
              <Link
                href={link.href}
                className={`${isActive ? "text-blue-600 font-semibold mx-3" : "mx-3 text-gray-700"} hover:underline hover:bg-gray-200 px-3 py-2 rounded-md transition`}
              >
                {link.name}
              </Link>
            </span>
          )
        })
      }
      {children}
      <h2>AUTH</h2>
    </>
  )
}