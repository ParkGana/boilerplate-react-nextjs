import { NextRequest, NextResponse } from 'next/server';

const AUTHENTICATED_URL = ['/'];
const NON_AUTHENTICATED_URL = ['/signin'];

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone();

  const isAuthenticated = !!req.cookies.get('isAuthenticated');

  // 로그인이 되어있지 않은 상태로 로그인이 필요한 경로에 접속할 경우, /signin 경로로 redirect
  if (!isAuthenticated && AUTHENTICATED_URL.includes(url.pathname)) {
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  // 로그인이 되어있는 상태로 로그인이 불필요한 경로에 접속할 경우, / 경로로 redirect
  if (isAuthenticated && NON_AUTHENTICATED_URL.includes(url.pathname)) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

/* middleware를 통한 검증이 필요한 경로들 */
export const config = {
  matcher: ['/', '/signin'],
};
