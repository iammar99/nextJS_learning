"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
    interface User {
        id: number;
        name: string;
        email: string;
        avatar: string;
    }
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            try {
                const res = await fetch("https://api.escuelajs.co/api/v1/users");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-lg font-semibold">
                Loading users...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                👥 User Gallery
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
                {users.slice(0, 12).map((user) => (
                    <Link key={user.id} href={`/photo-feed/${user.id}`}>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-full h-48 object-cover"
                                // onError={(e) => {
                                //     (e.target as HTMLImageElement).src =
                                //         "https://via.placeholder.com/150?text=No+Image";
                                // }}
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-900 truncate">
                                    {user.name}
                                </h2>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
