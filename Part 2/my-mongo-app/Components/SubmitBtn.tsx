"use client"

import { useFormStatus } from "react-dom"

export default function SubmitBtn() {

    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={`
        w-full py-3 mt-4 rounded-lg font-bold text-lg transition duration-200 ease-in-out shadow-lg
        text-white transform 
        bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.01] hover:cursor-pointer
        
        disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-70
    `}
        >
            {pending ? "Creating..." : "Add Product"}
        </button>
    )
}

