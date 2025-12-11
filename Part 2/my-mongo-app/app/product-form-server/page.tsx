"use client"

import SubmitBtn from "@/src/Components/SubmitBtn";
import { useActionState } from "react";
import { handleAddProduct, FormState } from "@/src/action/product";


export default function Page() {

    const initialState: FormState = {
        error : {}
    }

    const [state, formAction, isPending] = useActionState(handleAddProduct, initialState)

    return (
        <>
            <div className="w-full sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 rounded-xl shadow-2xl mt-10 bg-gray-900 border border-gray-700">
                <h2 className="text-3xl font-extrabold mb-6 text-white text-center">
                    Add Product from Server
                </h2>

                <form
                    action={formAction}
                    className="space-y-6 p-6 sm:p-8 rounded-xl bg-gray-800 shadow-xl"
                >
                    {/* Title */}
                    <div className="space-y-2">
                        <label className="block text-gray-300 font-semibold text-sm">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g., Stellar Mechanical Keyboard"
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                        />
                        {
                            state.error.title &&
                            <p className="text-red-600 text-sm mt-1">
                                {state.error.title}
                            </p>

                        }
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <label className="block text-gray-300 font-semibold text-sm">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="e.g., 129.99"
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                        />
                        {
                            state.error.price &&
                            <p className="text-red-600 text-sm mt-1">
                                {state.error.price}
                            </p>

                        }
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="block text-gray-300 font-semibold text-sm">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            placeholder="Briefly describe your product..."
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out resize-none"
                        />
                        {
                            state.error.description &&
                            <p className="text-red-600 text-sm mt-1">
                                {state.error.description}
                            </p>

                        }
                    </div>

                    {/* Button */}
                    <SubmitBtn />
                </form>
            </div>
        </>
    );
}
