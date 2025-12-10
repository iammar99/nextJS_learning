"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export type Product = {
  _id: string; // MongoDB _id
  title: string;
  price: number;
  description: string | null;
};

export default function ProductPageClient({
  products,
}: {
  products: Product[];
}) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData)

    try {
      const response = await fetch("/products-form/api/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(response.ok)
      if (response.status == 201) {
        router.push("/product-db")
      }
      else {
        console.log('Some error occured')
      }
    } catch (error) {
      console.log('error', error)
    }
    finally {
      setLoading(false);
    }

  };

  return (
    <>
      <div className="w-full sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 rounded-xl shadow-2xl mt-10 bg-gray-900 border border-gray-700">
        <h2 className="text-3xl font-extrabold mb-6 text-white text-center">
          New Product Listing
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 sm:p-8 rounded-xl bg-gray-800 shadow-xl"
        >
          {/* Title */}
          <div className="space-y-2">
            <label className="block text-gray-300 font-semibold text-sm">Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              value={formData.price}
              onChange={handleChange}
              required
              step="0.01"
              placeholder="e.g., 129.99"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-gray-300 font-semibold text-sm">Description</label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Briefly describe your product..."
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full hover:cursor-pointer py-3 mt-4 rounded-lg font-bold text-lg transition duration-200 ease-in-out shadow-lg
        ${loading
                ? "bg-indigo-700 opacity-50 cursor-not-allowed text-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-500 text-white transform hover:scale-[1.01]"
              }`}
          >
            {loading ? "Creating..." : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
}
