import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];

  let languages;
  try {
    languages = new Negotiator({ headers: negotiatorHeaders }).languages(
      locales
    );
  } catch (error) {
    // Handle potential error if headers are invalid for Negotiator
    // For example, if accept-language header is malformed.
    // Fallback to default locale in case of error.
    console.warn("Error negotiating languages, falling back to default locale:", error);
    languages = [i18n.defaultLocale];
  }


  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Skip middleware for API routes, Next.js specific paths, and static files
    if (pathname.startsWith('/api/') || 
        pathname.startsWith('/_next/') || 
        pathname.startsWith('/static/') ||
        /\.(.*)$/.test(pathname) // Matches files with extensions (e.g. .png, .pdf)
    ) {
      return NextResponse.next();
    }
    
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and static files
  matcher: ['/((?!api|_next/static|_next/image|images|cv.pdf|favicon.ico).*)'],
};
