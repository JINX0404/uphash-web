import { NextResponse } from 'next/server'

const COOKIE_NAME = 'auth-token'

export async function POST() {
  const response = NextResponse.json({ success: true })
  
  // Clear authentication cookie
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/'
  })
  
  return response
}