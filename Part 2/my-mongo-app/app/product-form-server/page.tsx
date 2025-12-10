import SubmitBtn from "@/Components/SubmitBtn";
import { addProduct } from "@/lib/product-db";
import { redirect } from "next/navigation";
import { useActionState } from "react";

type Error = {
    title?: string,
    price?: string,
    description?: string
}

type FormState = {
    error: Error
}

export default function page() {

    const initialState: FormState = {
        error = {}
    }

    const [state, formAction, isPending] = useActionState(handleAddProduct, initialState)

    async function handleAddProduct(formData: FormData) {
        "use server"
        const title = formData.get("title") as string;
        const price = Number(formData.get("price"));
        const description = formData.get("description") as string;

        const error: Error = {}
        if (!title) {
            error.title = "Title is Required"
        }
        if (!price) {
            error.price = "Price is Required"
        }
        if (!description) {
            error.description = "Description is Required"
        }

        if (Object.keys(error).length > 0) {
            return { error }
        }
        await addProduct(title, price, description)
        redirect("/product-db")
    }
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
                            required
                        />
                        {
                            state.error.title &&
                            <p className="text-red-600 bg-red-100 border border-red-400 rounded-md px-3 py-2 text-sm mt-2">
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
                            required
                        />
                        {
                            state.error.price &&
                            <p className="text-red-600 bg-red-100 border border-red-400 rounded-md px-3 py-2 text-sm mt-2">
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
                            <p className="text-red-600 bg-red-100 border border-red-400 rounded-md px-3 py-2 text-sm mt-2">
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
