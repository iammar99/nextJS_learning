type Album = {
    id: number,
    title: string,
}

type Post = {
    userId: number,
    title: string,
    id: number,
    body: string,
}

const getUserPosts = async (userId: string) => {
    await new Promise((resolve)=>{setTimeout(resolve,1000)})
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return res.json()
}

const getUserAlbums = async (userId: string) => {
    await new Promise((resolve)=>{setTimeout(resolve,1000)})
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return res.json()
}


export default async function page({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params

    const postData = getUserPosts(id)
    const albumData = getUserAlbums(id)

    const [posts, albums] = await Promise.all([postData, albumData])
    return (
        <div className="w-full min-h-screen bg-gray-700  p-6">

            <h1 className="text-white text-5xl font-bold mb-8">
                User Profile
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT COLUMN — ALBUMS */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Albums</h2>
                    {albums.map((album: Album) => (
                        <div
                            key={album.id}
                            className="p-4 bg-white rounded-lg shadow mb-4 border border-gray-200"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">
                                {album.title}
                            </h3>
                            <p className="text-gray-600 text-sm">Album ID: {album.id}</p>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN — POSTS */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Posts</h2>
                    {posts.map((post: Post) => (
                        <div
                            key={post.id}
                            className="p-4 bg-white rounded-lg shadow mb-4 border border-gray-200"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">
                                {post.title}
                            </h3>
                            <p className="text-gray-700 mt-1">{post.body}</p>
                            <p className="text-gray-500 text-sm mt-2">Post ID: {post.id}</p>
                            <p className="text-gray-500 text-sm">User ID: {post.userId}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
