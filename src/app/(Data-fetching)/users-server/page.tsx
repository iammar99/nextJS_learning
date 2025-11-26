
type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string,
    phone: string,
}


export default async function page() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await response.json()


    return (
        <div className="w-full p-4 bg-gray-900">
            <div className="grid grid-cols-2 gap-4">
                {users.map((user: User) => (
                    <div
                        key={user.id}
                        className="p-4 bg-white rounded-lg shadow border border-gray-200"
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
        </div>


    )
}
