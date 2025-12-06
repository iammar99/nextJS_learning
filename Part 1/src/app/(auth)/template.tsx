"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks: { href: string; name: string }[] = [
    { href: "/login", name: "Login" },
    { href: "/register", name: "Register" },
    { href: "/", name: "Home" },
  ];

  const [val, setVal] = useState("");
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-center gap-4 my-4">
        <input
          type="text"
          onChange={(e) => setVal(e.target.value)}
          className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={val}
          placeholder="Type something..."
        />
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={`${isActive
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-700"
                } hover:underline hover:bg-gray-200 px-3 py-2 rounded-md transition`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <main>{children}</main>

      <footer className="text-center text-sm text-gray-500 mt-4">AUTH</footer>
    </>
  );
}
