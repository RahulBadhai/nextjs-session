import { NextRequest, NextResponse } from 'next/server';
// import db from './lib/db';
// import cookie from 'cookie';

export async function middleware(req:NextRequest) {
    // console.log('this is middleware',req);
    // const cookies = cookie.parse(req.headers.get('cookie') || '');
    // const sessionId = cookies['session-id'];

    // if (!sessionId) {
    //     return NextResponse.redirect('/login');
    // }

    // const [rows] = await db.execute(
    //     'SELECT * FROM sessions WHERE id = ? AND expires > NOW()',
    //     [sessionId]
    // );

    // if (rows.length === 0) {
    //     return NextResponse.redirect('/login');
    // }

    // // Optional: Attach session data to the request
    // req.session = JSON.parse(rows[0].data);

    return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }
