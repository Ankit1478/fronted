import { NextResponse } from 'next/server';

const allowedOrigins = [
  /localhost\.[0-9]+$/,
  'https://sleepytales-dev.vercel.app',
  'https://sleepytales-test.vercel.app',
  'https://sleepytales.vercel.app',
  'https://sleepytales.ai',
  'https://www.sleepytales.ai',
  'https://12fb-108-48-44-85.ngrok-free.app',
  // // Stripe webhook notifigations origins
  // '3.18.12.63',
  // '3.130.192.231',
  // '13.235.14.237',
  // '13.235.122.149',
  // '18.211.135.69',
  // '35.154.171.200',
  // '52.15.183.38',
  // '54.88.130.119',
  // '54.88.130.237',
  // '54.187.174.169',
  // '54.187.205.235',
  // '54.187.216.72',
]

// Middleware
// ========================================================
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // Response
  const response = NextResponse.next();

  // Allowed origins check
  const origin = request.headers.get('origin') ?? '';

  if (allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  // Return
  return response;
}

export const config = {
  matcher: '/server/:path*',
}