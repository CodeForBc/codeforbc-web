import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledEngineProvider } from '@mui/material/styles';
import { Lato } from 'next/font/google';
import React from 'react';
import './globals.scss';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={lato.className}>
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
