import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {

  const linkStyle = {
    fontSize: '2rem',
    margin: '1rem',
    color: '#FFFFFF',
    textDecoration: 'underline'
  };

  const centeredTextStyle = {
    fontSize: '4rem',
    textAlign: 'center',
    color: '#FFFFFF'
  };

  const centeredSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  };

  return (
    <>
      <Head>
        <title>Jared M.</title>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Head>
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Existing navigation here */}
          </nav>
        </div>
      </header>
      <section className="text-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1 style={{ ...centeredTextStyle, fontFamily: 'Trebuchet MS' }}>Hi, I'm Jared M.</h1>
        <h2 style={centeredTextStyle}>Thanks for coming to my site</h2>
      </section>
      <section style={centeredSectionStyle}>
        <a href="/resume" style={linkStyle}>Resume</a>
        <a href="/linkedin" style={linkStyle}>LinkedIn</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </section>
      {/* Existing footer and other content */}
    </>
  );
}
