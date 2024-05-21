import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledEngineProvider } from '@mui/material/styles';
import { Lexend } from 'next/font/google';
import React from 'react';
import './globals.scss';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {children}
          </AppRouterCacheProvider>
        </StyledEngineProvider>
        <Footer />
      </body>
    </html>
  );
}
