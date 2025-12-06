import { Suspense } from "react"
import Author from "./author"

type Post = {
    userId: number,
    title: string,
    id: number,
    body: string,
}


export default async function page() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Post[] = await response.json()

    const filteredPost = posts.filter((post) => post.id % 10 === 1)
    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-4xl mx-auto grid gap-6">
                {filteredPost.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            {post.title}
                        </h2>

                        <p className="text-gray-600 mb-4">{post.body}</p>

                        <p className="text-sm text-gray-500 flex">
                            <span className="font-bold text-gray-700">Written by:</span>&nbsp;
                            <Suspense fallback={<div>Loading...</div>}>
                                <Author userId={post.userId} />
                            </Suspense>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
