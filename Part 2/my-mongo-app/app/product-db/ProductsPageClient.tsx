"use client";

import { useState } from "react";
import Link from "next/link";
import DeleteBtn from "@/src/Components/DeleteBtn";

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


  const [productList, setProductList] = useState(products);



  return (
    <>
      {
        productList.length > 0
          ?
          <>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productList.map((p) => (
                <div key={p._id} className="relative border rounded-lg p-4 shadow">
                  {/* Delete Button */}
                  <DeleteBtn
                    id={p._id}
                    onDelete={(deletedId) => {
                      setProductList((prev) => prev.filter(item => item._id !== deletedId));
                    }}
                  />


                  <Link href={`/product-db/${p._id}`}>
                    <h2 className="text-xl font-bold mb-2">{p.title}</h2>
                    <p className="text-gray-700 mb-2">{p.description}</p>
                    <p className="text-green-600 font-semibold">${p.price}</p>
                  </Link>
                </div>

              ))}
            </div>
          </>
          :
          <h1 className="text-5xl font-bold text-center m-auto mt-16">No Product Found</h1>
      }
    </>
  );
}
