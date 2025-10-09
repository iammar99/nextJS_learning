import { data } from "./data"

export async function GET() {
  return Response.json(data)
}

export async function POST(request: Request) {
  const prod = await request.json()
  const newProd = {
    id: data.length + 1,
    ...prod
  }
  data.push(newProd)
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status:201
  })
}
