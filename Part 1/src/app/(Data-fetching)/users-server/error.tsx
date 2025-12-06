"use client"

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg text-center border border-white/20">
        
        <div className="text-red-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" 
               fill="none" 
               viewBox="0 0 24 24" 
               strokeWidth={1.5} 
               stroke="currentColor" 
               className="w-20 h-20 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2">Something Went Wrong</h1>
        <p className="text-gray-300 mb-8">
          We couldn`t process your request. Please try again later.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl text-white font-medium bg-red-600 hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/40"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
