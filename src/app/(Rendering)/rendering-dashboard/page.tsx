"use client"

import { useState } from "react"




export default function Page() {

    const [name, setName] = useState("")

    console.log("Client Side Component")
    return (
        <div>
            <input
                type="text"
                className="px-4 py-2 m-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter text..."
                value={name}
                onChange={(e) => setName(e.target.value)}
             />
             <h1 className="text-4xl font-bold text-gray-900">
                Hello {name}
             </h1>
        </div>
    )
}
