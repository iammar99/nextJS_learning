import { data } from "../data2";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

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


  return Response.json(searchData,{
    headers:{
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark"
    }

  });
}