import { serverSideFunction } from "@/Utils/serverSideFunction"

export default function page() {

    const result = serverSideFunction()
    return (
        <main className="bg-zinc-800 h-screen text-white">
            <div>page {result}</div>
        </main>
    )
}
