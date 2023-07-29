import '../styles/globals.css';

import { Montserrat } from 'next/font/google';
// import NextNProgressClient from './NextNProgress.client';

export const metadata = {
  title: 'Sokchhunly Nel',
  description:
    'Sokchhunly Nel is a web developer based in Phnom Penh, Cambodia. He is a self-taught developer who loves to build things with code.'
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>
        {/* <NextNProgressClient /> */}
        {children}
      </body>
    </html>
  );
}
