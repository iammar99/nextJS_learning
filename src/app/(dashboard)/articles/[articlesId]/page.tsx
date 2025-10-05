"use client"

import Link from "next/link"
import { use } from "react"


export default  function Article({
    params,
    searchParams
}: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "es" | "fr" | "en" }>
}
) {
const { articleId } = use(params)
    const { lang } = use(searchParams)
    console.log(articleId , lang)
    return (
        <>
            <h1>Reading Article # {articleId}</h1>
            <h3>Reading in :- {lang}</h3>
            <div>
                <Link className="text-blue-600 hover:underline" href={`/articles/${articleId}?lang=en`}>English</Link>
                <br />
                <Link className="text-blue-600 hover:underline" href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <br />
                <Link className="text-blue-600 hover:underline" href={`/articles/${articleId}?lang=fr`}>French</Link>
                <br />
            </div>
        </>
    )
}
