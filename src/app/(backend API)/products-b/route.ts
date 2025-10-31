import { NextRequest, NextResponse } from "next/server";
import { data } from "./data";
import { cookies, headers } from "next/headers";
// import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  // Example: if you *really* want to redirect, do it conditionally
  // redirect("/products-b/v2"); // ⚠️ Remove or move this below filters if not needed

  const Header = await headers();
  console.log("Auth Header:", Header.get("Authorization"));

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") || ""; // ✅ prevent null

  // Safe filter
  const searchData = query
    ? data.filter((prod) =>
        prod.name?.toLowerCase().includes(query.toLowerCase())
      )
    : data;

  const theme = request.cookies.get("theme");
  console.log("Theme cookie:", theme?.value);

  const cookieStore = await cookies();
  cookieStore.set("token", "true");
  console.log("Theme after set:", cookieStore.get("theme"));

  // Return response
  return NextResponse.json(searchData, {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark",
    },
  });
}

export async function POST(request: Request) {
  const prod = await request.json();
  const newProd = {
    id: data.length + 1,
    ...prod,
  };

  data.push(newProd);

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
