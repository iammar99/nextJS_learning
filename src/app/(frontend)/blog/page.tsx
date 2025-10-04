import { Metadata } from "next"

export const metadata: Metadata = {
    title : "Blog"
}

export default async function Blog() {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolveed")
        },2000)
    })
    return (
        <h1>Blog</h1>
    )
}