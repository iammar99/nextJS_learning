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
    const  {articlesId}  = use(params)
    const { lang } = use(searchParams)
    console.log(articlesId , lang)
    return (
        <>
            <h1>Reading Article # {articlesId}</h1>
            <h3>Reading in :- {lang}</h3>
            <div>
                <Link className="text-blue-600 hover:underline" href={`/articles/${articlesId}?lang=en`}>English</Link>
                <br />
                <Link className="text-blue-600 hover:underline" href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
                <br />
                <Link className="text-blue-600 hover:underline" href={`/articles/${articlesId}?lang=fr`}>French</Link>
                <br />
            </div>
        </>
    )
}
