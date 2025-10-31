import { NextRequest } from "next/server";
import { data } from "./data"
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeader = new Headers(request.headers)
  // console.log(requestHeader.get("Authorization"))

  const Header = await headers()
  console.log(Header.get("Authorization"))
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  // console.log("First product structure:", data[0]);
  // console.log("Query:", query);

  const searchData = query
    ? data.filter((prod) => {
      console.log("Checking product:", prod); 
      return prod.name?.toLowerCase().includes(query.toLowerCase());
    })
    : data;

    const theme = request.cookies.get("theme")
    console.log(theme)

    const cookie = await cookies()
    cookie.set("token","true")
    console.log(cookie.get("theme"))

  // console.log("Filtered results:", searchData.length, "out of", data.length);

  return Response.json(searchData,{
    headers:{
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark"
    }

  });
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
    status: 201
  })
}
