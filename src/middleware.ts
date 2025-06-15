import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Locale-specific logic has been removed.
  // You can add other middleware logic here if needed,
  // for example, for handling headers or redirects not related to i18n.
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and static files
  // This can be adjusted if your needs change.
  matcher: ['/((?!api|_next/static|_next/image|images|cv.pdf|favicon.ico).*)'],
};
