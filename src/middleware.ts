// import { NextRequest, NextResponse } from 'next/server';
// // import db from './lib/db';
// // import cookie from 'cookie';

// export async function middleware(req:NextRequest) {
//     // console.log('this is middleware',req);
//     // const cookies = cookie.parse(req.headers.get('cookie') || '');
//     // const sessionId = cookies['session-id'];

//     // if (!sessionId) {
//     //     return NextResponse.redirect('/login');
//     // }

//     // const [rows] = await db.execute(
//     //     'SELECT * FROM sessions WHERE id = ? AND expires > NOW()',
//     //     [sessionId]
//     // );

//     // if (rows.length === 0) {
//     //     return NextResponse.redirect('/login');
//     // }

//     // // Optional: Attach session data to the request
//     // req.session = JSON.parse(rows[0].data);

//     return NextResponse.next();
// }

// export const config = {
//     matcher: [
//       /*
//        * Match all request paths except for the ones starting with:
//        * - api (API routes)
//        * - _next/static (static files)
//        * - _next/image (image optimization files)
//        * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//        */
//       '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//     ],
//   }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import pool from "./lib/db";
import { getSession } from "./api/session";
// import cookie from 'cookie';

export async function middleware(req: NextRequest) {
  // const cookies = req.headers.get('cookie');
  // if (!cookies) {
  //     return NextResponse.redirect('/login');
  // }

  // const { 'session-id': sessionId } = cookie.parse(cookies);

  // if (!sessionId) {
  //     return NextResponse.redirect('/login');
  // }
  console.log('hooo')
  try {
    // const result = await pool.query(
    //   // 'SELECT * FROM sessions WHERE session_id = $1 AND expires > NOW()',
    //   "SELECT * FROM sessions"
    // );
    getSession();
    // console.log("hiii", result.rows);
    // if (result.rows.length === 0) {
    //     return NextResponse.redirect('/login');
    // }

    // Attach session data to the request
    // req.headers.set('x-session-data', JSON.stringify(result.rows[0].data));
  } catch (err) {
    console.error("Error validating session:", err);
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/src/app/:path*'], // Apply middleware to protected routes

  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
  //    */
  //   "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  // ],
};
