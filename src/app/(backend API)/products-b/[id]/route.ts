import { data } from "../data"

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const product = data.find((prod) => prod.id === Number(id));

  if (!product) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  return Response.json(product);
}


export async function PATCH(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await _request.json()
  const { name } = body


  const product = data.find((prod) => prod.id === Number(id));
  product.name = name

  if (!product) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  return Response.json(product);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = data.findIndex((prod)=> prod.id === parseInt(params.id))
  data.splice(index,1)
  return Response.json(data)
}
