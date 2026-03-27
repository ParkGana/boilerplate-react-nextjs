import type { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/tailwind.css';
import Provider from '@/provider';

export const metadata: Metadata = {
  title: 'Boilerplate - React Next.js',
  description: 'Boilerplate - React Next.js',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
