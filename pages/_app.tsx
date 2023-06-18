import React from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.css';
import Head from 'next/head';

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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
