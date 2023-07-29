import React from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.css';
import Head from 'next/head';

import NextNProgress from 'nextjs-progressbar';

import { Montserrat } from 'next/font/google';

const fonts = Montserrat({
  display: 'swap',
  subsets: ['latin']
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sokchhunly Nel</title>

        <meta name='title' content='Sokchhunly Nel' />
        <meta
          name='description'
          content='Sokchhunly Nel is a web developer based in Phnom Penh, Cambodia. He is a self-taught developer who loves to build things with code.'
        />

        <link rel='icon' href='/assets/favicon.png' />
      </Head>

      <NextNProgress
        color={(() => {
          const colors = ['#0D393A', '#50B4A2', '#DD4D1D'];

          return `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;
        })()}
        options={{
          showSpinner: false
        }}
      />
      <span className={fonts.className}>
        <Component {...pageProps} />
      </span>
    </>
  );
}

export default MyApp;
