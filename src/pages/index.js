import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Stars from '../components/Stars';

export default function Home() {
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
  const gradingBoxStyle = {
    backgroundColor: 'grey',
    color: 'yellow',
    padding: '10px',
    textAlign: 'center',
    display: 'inline-block',
  };

  const arrowStyle = {
    color: 'yellow',
    fontSize: '50px',
    textAlign: 'center',
  };

  const tinyStyle = {
    fontSize: '10px',
    textAlign: 'center',
    color: '#FFFFFF',
  };
  const linkSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    width: '50%',
  };
  const boxAndArrowContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const italicStyle = {
    fontStyle: 'italic',
  };

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'underline',
    fontSize: '20px',
    textAlign: 'center',
  };

  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'start',
    height: '100vh',
    padding: '20px',
  };

  return (
    <div>
      {/* Star background */}
      <Stars />
  
      {/* Head element for setting the page title and global styles */}
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
  
      {/* Header section */}
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Navigation links or logo */}
          </nav>
        </div>
      </header>
  
      {/* Introductory text section */}
      <section className="text-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1 style={{ ...centeredTextStyle, fontFamily: 'Trebuchet MS' }}>Hi, I'm Jared M.</h1>
        <h2 style={centeredTextStyle}>Thanks for coming to my site</h2>
        <p style={{ ...tinyStyle, ...italicStyle }}>it's still under construction ;) </p>
      </section>
  
      {/* Main content section */}
      <section style={flexContainerStyle}>
        {/* Left column with links */}
        <div style={linkSectionStyle}>
          {/* Each link is wrapped in a div for styling */}
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/globevid" style={linkStyle}>My story so far</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/contact" style={linkStyle}>Contact</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/blog" style={linkStyle}>Blog</Link>
          </div>
          </div>

          
    {/* a grey box to tell the MGT201 TA's wassup */}
        <div style={boxAndArrowContainerStyle}>
          <div style={gradingBoxStyle}>
            Grading my site for MGT201? Look here
          </div>
          <div style={arrowStyle}>&rarr;</div>
        </div>


    {/* more links */}
        <div style={linkSectionStyle}>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/resume" style={linkStyle}>Resume</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/self-swot" style={linkStyle}>Self-SWOT</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/linkedin" style={linkStyle}>LinkedIn</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/statements-of-interest" style={linkStyle}>Statements of Interest</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/brand-statement" style={linkStyle}>Brand Statement</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/career-reflection-artifact" style={linkStyle}>Career Reflection Artifact</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/core-story-set" style={linkStyle}>Core Story Set</Link>
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/project-page" style={linkStyle}>Project Page</Link>
          </div>
        </div>
      </section>
    </div>
  );
}