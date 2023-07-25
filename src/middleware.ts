import { NextApiResponse } from 'next'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest, responce:NextApiResponse) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/api/v1/login' || path === '/api/v1/register' 

  const token = request.cookies.get('library')?.value || ''
  
  if(token) {
      console.log('1');
  }  
}

export const config = {
  matcher: [
    '/',
    '/api/v1/register',
    '/api/v1/login',
  ]
}
