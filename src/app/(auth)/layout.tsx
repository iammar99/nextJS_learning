"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks: Array = [
    { href: "/login", name: "Login" },
    { href: "/register", name: "Register" },
  ]
  const pathname = usePathname()
  return (
    <>
      {
        navLinks.map((link: object, index: any) => {
          const isActive = pathname == link.href
          return (
            <span key={index}>
              <Link
                href={link.href}
                className={`${isActive ? "text-blue-600 font-semibold" : "text-gray-700"} hover:underline hover:bg-gray-200 px-3 py-2 rounded-md transition`}
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