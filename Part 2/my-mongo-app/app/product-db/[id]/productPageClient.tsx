"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
    _id: string;
    title: string;
    price: number;
    description: string | null;
};

export default function ProductDetailPage({ product }: { product: Product }) {
    const [editableProduct, setEditableProduct] = useState<Product>(product);
    const [isEdited, setIsEdited] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditableProduct(prev => ({
            ...prev,
            [name]: name === "price" ? parseFloat(value) || 0 : value
        }));
        setIsEdited(true);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/product-db/${product._id}/api`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editableProduct),
            });

            if (response.ok) {
                router.push("/product-db/")
                setIsEdited(false);
                console.log("Updated product:", editableProduct);
            }
            else {
                console.log("Error Occured")
            }
            console.log(response)
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setEditableProduct(product);
        setIsEdited(false);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative">
            <Link
                href="/product-db"
                className="absolute top-4 left-4 text-5xl text-slate-300 hover:text-white p-2 transition-colors cursor-pointer"
            >
                ⇐
            </Link>

            <div className="max-w-3xl w-full mx-auto p-6">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl p-8">
                    {/* Title */}
                    <div className="mb-6">
                        <label className="block text-slate-400 text-sm font-medium mb-2">
                            Product Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={editableProduct.title}
                            onChange={handleChange}
                            className="w-full text-3xl font-bold bg-slate-700/30 text-slate-100 border border-slate-600/50 rounded-lg p-3
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <label className="block text-slate-400 text-sm font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={editableProduct.description || ""}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-slate-700/30 text-slate-300 border border-slate-600/50 rounded-lg p-3
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                        <label className="block text-slate-400 text-sm font-medium mb-2">
                            Price
                        </label>
                        <div className="relative inline-block">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 text-2xl font-semibold">
                                $
                            </span>
                            <input
                                type="number"
                                name="price"
                                value={editableProduct.price}
                                onChange={handleChange}
                                step="0.01"
                                className="text-green-400 text-2xl font-semibold bg-slate-700/30 border border-slate-600/50 rounded-lg p-3 pl-10
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-48"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    {isEdited && (
                        <div className="flex gap-4 pt-6 border-t border-slate-700">
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className={`flex-1 py-3.5 rounded-lg font-semibold text-white transition-all shadow-lg
                  ${loading
                                        ? "bg-slate-600 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:cursor-pointer hover:shadow-xl transform hover:-translate-y-0.5"
                                    }`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Updating...
                                    </span>
                                ) : (
                                    "Save Changes"
                                )}
                            </button>

                            <button
                                onClick={handleCancel}
                                disabled={loading}
                                className="flex-1 py-3.5 rounded-lg font-semibold text-slate-300 bg-slate-700/50 hover:bg-slate-700 
                  transition-all border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Cancel
                            </button>
                        </div>
                    )}

                    {/* Product ID */}
                    <div className="mt-6 text-slate-500 text-sm">
                        Product ID: {product._id}
                    </div>
                </div>
            </div>
        </div>
    );
}
