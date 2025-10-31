import { NextRequest } from "next/server";
import { data } from "../data"; // adjust path

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  
  console.log("Query:", query);
  
  const searchData = query 
    ? data.filter((prod) => {
        console.log("Checking product:", prod);
        return prod.name?.toLowerCase().includes(query.toLowerCase()); // ✅ TypeScript knows query is not null here
      })
    : data;
  
  console.log("Filtered results:", searchData.length);
  
  return Response.json(searchData);
}