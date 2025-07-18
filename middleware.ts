import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configuration
const PASSWORD = '0711'
const COOKIE_NAME = 'auth-token'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

// Public paths that don't require authentication
const publicPaths = ['/api/auth/login', '/api/auth/check']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip authentication for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check for authentication cookie
  const authToken = request.cookies.get(COOKIE_NAME)
  
  if (!authToken || authToken.value !== PASSWORD) {
    // If it's an API route, return 401
    if (pathname.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ error: 'Authentication required' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      )
    }
    
    // For regular pages, show the auth form
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="ja">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>工事中 - UPHASH Inc.</title>
          <link rel="icon" href="/favicon.ico" />
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              background-color: #f5f5f5;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: 20px;
              position: relative;
            }
            body::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: repeating-linear-gradient(
                45deg,
                rgba(0, 0, 0, 0.03),
                rgba(0, 0, 0, 0.03) 10px,
                transparent 10px,
                transparent 20px
              );
              pointer-events: none;
            }
            .auth-container {
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              padding: 40px;
              max-width: 400px;
              width: 100%;
              border: 2px dashed #ddd;
            }
            .construction-icon {
              width: 60px;
              height: 60px;
              margin: 0 auto 20px;
              display: block;
            }
            .logo {
              font-size: 32px;
              font-weight: 900;
              margin-bottom: 30px;
              text-align: center;
              letter-spacing: -1px;
            }
            h1 {
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 20px;
              color: #333;
              text-align: center;
            }
            .form-group {
              margin-bottom: 20px;
            }
            label {
              display: block;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 8px;
              color: #555;
            }
            input[type="password"] {
              width: 100%;
              padding: 12px 16px;
              font-size: 16px;
              border: 1px solid #ddd;
              border-radius: 4px;
              transition: border-color 0.2s;
            }
            input[type="password"]:focus {
              outline: none;
              border-color: #000;
            }
            button {
              width: 100%;
              padding: 12px 24px;
              font-size: 16px;
              font-weight: 600;
              color: white;
              background-color: #000;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            }
            button:hover {
              background-color: #333;
            }
            .error {
              color: #dc2626;
              font-size: 14px;
              margin-top: 10px;
              text-align: center;
              display: none;
            }
            .error.show {
              display: block;
            }
          </style>
        </head>
        <body>
          <div class="auth-container">
            <svg class="construction-icon" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <div class="logo">UPHASH</div>
            <h1>サイト工事中</h1>
            <p style="color: #666; font-size: 14px; margin-bottom: 20px; text-align: center;">
              現在ウェブサイトは準備中です。<br>
              関係者の方はパスワードを入力してください。
            </p>
            <form id="authForm">
              <div class="form-group">
                <label for="password">パスワード</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required 
                  autofocus
                  placeholder="パスワードを入力してください"
                />
              </div>
              <button type="submit">ログイン</button>
              <div class="error" id="error">パスワードが正しくありません</div>
            </form>
          </div>
          <script>
            document.getElementById('authForm').addEventListener('submit', async (e) => {
              e.preventDefault();
              const password = document.getElementById('password').value;
              const errorEl = document.getElementById('error');
              
              try {
                const response = await fetch('/api/auth/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ password })
                });
                
                if (response.ok) {
                  window.location.reload();
                } else {
                  errorEl.classList.add('show');
                  document.getElementById('password').value = '';
                  document.getElementById('password').focus();
                }
              } catch (error) {
                errorEl.classList.add('show');
              }
            });
            
            document.getElementById('password').addEventListener('input', () => {
              document.getElementById('error').classList.remove('show');
            });
          </script>
        </body>
      </html>
      `,
      {
        status: 200,
        headers: { 'content-type': 'text/html; charset=utf-8' }
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}