"use client"

import Loader from "@/Components/loader"
import { useEffect, useState } from "react"

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string,
    phone: string,
}

export default function UserClient() {

    const [users, setUser] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState("")


    const fetchData = async () => {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        try {
            if (response.ok) {
                // console.log(response.json())
                const data = await response.json()
                setUser(data)
            }
        } catch (err) {
            if (err instanceof Error) {
                setErrors(err.message)
            } else {
                setErrors("An error occured")
            }
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    if (loading) return (
        <div className="bg-gray-900 h-screen w-100 flex justify-center items-center">
            <Loader/> 
        </div>
    )


    if (errors) return <div>Error Occured {errors}</div>

    return (
        <div className="w-100 p-4 bg-gray-900 shadow-md ">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="p-4 bg-white rounded-lg shadow mb-4 border border-gray-200"
                >
                    <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>

                    <p className="text-gray-600">
                        <span className="font-medium">Username:</span> {user.username}
                    </p>

                    <p className="text-gray-600">
                        <span className="font-medium">Email:</span> {user.email}
                    </p>

                    <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> {user.phone}
                    </p>

                    <p className="text-gray-600">
                        <span className="font-medium">Website:</span> {user.website}
                    </p>
                </div>
            ))}

        </div>
    );
}
