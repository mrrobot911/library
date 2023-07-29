import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPrivatePath = path === '/api/v1/books' 

  const token = request.cookies.get('library')?.value || ''
  
  if(isPrivatePath && !token) {   
    return NextResponse.redirect(new URL( '/api/v1/books_all', request.url))
  }
}

export const config = {
  matcher: [
    '/',
    '/api/v1/register',
    '/api/v1/login',
    '/api/v1/books',
  ]
}
