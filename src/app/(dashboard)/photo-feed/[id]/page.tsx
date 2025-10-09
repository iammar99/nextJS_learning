"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export default function UserDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) loadUser();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading user...
      </div>
    );

  if (!user)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-600 font-semibold mb-4">User not found!</p>
        <button
          onClick={() => router.back()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-6">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
        {/* <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-gray-300"
          onError={(e) =>
          ((e.target as HTMLImageElement).src =
            "https://ui-avatars.com/api/?name=Unknown&background=random")
          }

        /> */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h1>
        <p className="text-gray-600 mb-1">{user.email}</p>
        <p className="text-gray-500 text-sm">Role: {user.role}</p>
        <button
          onClick={() => router.back()}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Gallery
        </button>
      </div>
    </div>
  );
}
