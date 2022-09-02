import Head from 'next/head';
import React from 'react';
import AboutMe from '../components/About';

export default function About() {
  return (
    <>
      <Head>
        <title>About NazmuL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      <AboutMe />
    </>
  );
}
