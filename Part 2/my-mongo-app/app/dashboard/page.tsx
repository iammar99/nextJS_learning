import Counter from "@/Components/Counter"
import { auth, currentUser } from "@clerk/nextjs/server"

export default async function page() {
    const authObj = await auth()
    const userObj = await currentUser()
    console.log([authObj, userObj])
    return (
        <>
            <h1 className="text-center my-4 text-6xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dashboard page
            </h1>
            <Counter />
        </>
    )
}
