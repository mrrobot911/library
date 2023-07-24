import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/api/v1/login' || path === '/api/v1/register' 

  const token = request.cookies.get('token')?.value || ''
  
  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }  
}

export const config = {
  matcher: [
    '/',
    '/api/v1/register',
    '/api/v1/login',
  ]
}
