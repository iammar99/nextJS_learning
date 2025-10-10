import { data } from "../data"

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const comment = data.find((prod) => prod.id === Number(id));

  if (!comment) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  return Response.json(comment);
}
