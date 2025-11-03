import {type NextRequest,   NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
   

    const response = NextResponse.next()
    const themePrefrences = request.cookies.get("theme")

    if(!themePrefrences){
        response.cookies.set("theme","dark")
    }
    return response



    // if(request.nextUrl.pathname == "/profile"){
    //     return NextResponse.redirect(new URL("/",request.nextUrl))
    // }
   
    // return NextResponse.redirect(new URL("/",request.url))
}


// export const config = {
//     matcher : "/profile"
// }