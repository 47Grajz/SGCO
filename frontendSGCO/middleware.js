import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req, res) {
  const jwt = req.cookies.get('token');
  const encoder = new TextEncoder();
  const SECRET = encoder.encode(process.env.JWT_SECRET);
  console.log('pathname', req.nextUrl.pathname);

  // If user is on the login page and there's a JWT, redirect to the dashboard
  if (req.nextUrl.pathname === '/auth/login' && jwt) {
    return NextResponse.redirect(new URL('/ShinyDesk/General', req.nextUrl).href);
  }

  if (jwt) {
    try {
      const decoded = await jwtVerify(jwt.value, SECRET, { algorithms: ['HS256'] });
      const { payload } = decoded;
      const allowedRoles = [909, 808,202];
      console.log('payload', payload);

      if (!allowedRoles.includes(payload.role)) {
        console.log('Unauthorized: Insufficient permissions');
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl).href);
      }

      if (payload.role === 909 || payload.role === 202) {
        const response = NextResponse.next()
      
        // Crear un objeto user y almacenarlo en una cookie
        const user = {
          name: payload.userName,
          role: payload.role,
          email: payload.email,
        };
      
        response.cookies.set('user', JSON.stringify(user), {
          path: '/',
        });
      
      
        return response;
      }

      console.log('User authenticated with role:', payload.role);
      return NextResponse.next();
    } catch (error) {
      console.error('Error verifying JWT:', error);
      return NextResponse.redirect(new URL('/auth/login', req.nextUrl).href);
    }
  } else if (req.nextUrl.pathname !== '/auth/login') {
    // Only redirect to the login page if the user is not already there
    return NextResponse.redirect(new URL('/auth/login', req.nextUrl).href);
  }

  // If user is on the login page and there's no JWT, just continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/ShinyDesk/:path*', '/auth/login'],
};