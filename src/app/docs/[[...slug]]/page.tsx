export default function Docs({
    params
}: {
    params: {
        slug: string[]
    }
}) {
    if (params.slug?.length == 2) {
        return <h1>Docs for {params.slug[0]} and Concept for {params.slug[1]}</h1>;
    }
    else  if (params.slug?.length == 1) {
        return <h1>Docs for {params.slug[0]}</h1>;
    }
    return (
        <h1>Slug: {params.slug ? params.slug.join('/') : 'Loading...'}</h1>
    )
}