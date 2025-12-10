import { addProduct } from "@/lib/product-db";
import { redirect } from "next/navigation";

export default function page() {

    async function handleAddProduct(formData:FormData){
        "use server"
        const title = formData.get("title") as string;
        const price = Number(formData.get("price"));
        const description = formData.get("description") as string;
        await addProduct(title,price,description)
        redirect("/product-db")
    }
    return (
        <>
            <div className="w-full sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 rounded-xl shadow-2xl mt-10 bg-gray-900 border border-gray-700">
                <h2 className="text-3xl font-extrabold mb-6 text-white text-center">
                    Add Product from Server
                </h2>

                <form
                action={handleAddProduct}
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
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className={`bg-indigo-600 hover:bg-indigo-500 text-white transform hover:scale-[1.01] w-full hover:cursor-pointer py-3 mt-4 rounded-lg font-bold text-lg transition duration-200 ease-in-out shadow-lg`}>
                        Add Product
                    </button>
                </form>
            </div>
        </>
    );
}
