import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Cursor from '../components/cursor';

export default function Home() {
  const cursorRef = useRef(null);

  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  const move = (e) => {
    try {
      const x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      const y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

      if (cursorRef.current) {
        cursorRef.current.style.left = x - 50 + "px";
        cursorRef.current.style.top = y - 50 + "px";
      }
    } catch (e) {}
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
    };
  }, []);
  const centeredTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  };

  const tinyStyle = {
    fontSize: '10px',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '20px',
    textAlign: 'center',
  };

  const centeredSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  };

  return (
    <div>
      <div ref={cursorRef} id="my-div"></div>
      <Head>
        <title>Jared M.</title>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background: #000; 
            color: #FFF;
            // Additional global styles can be placed here
          }
        `}</style>
      </Head>
      
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Navigation links or logo */}
          </nav>
        </div>
      </header>
      <section className="text-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <s><Cursor /></s>
      <h1 style={{ ...centeredTextStyle, fontFamily: 'Trebuchet MS' }}>Hi, I'm Jared M.</h1>
        <h2 style={centeredTextStyle}>Thanks for coming to my site</h2>
        <p style={tinyStyle}>it's still under construction ;) </p>
      </section>
      <section style={centeredSectionStyle}>
        <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
          <Link href="/globevid" style={linkStyle}>My story so far</Link>
        </div>
        <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
          <Link href="/contact" style={linkStyle}>Contact</Link>
        </div>
        <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
          <Link href="/linkedin" style={linkStyle}>LinkedIn</Link>
        </div>
      </section>
    </div>
  );
}