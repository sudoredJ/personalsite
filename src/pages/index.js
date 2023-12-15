import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";


export default function Home() {

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
    <div className="page-wrapper">
        <CustomCursor />
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
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="hero-wrapper">
        <Hero title="Hi, I'm Jared M." index>
  <p className="hero-description small width">
    Thanks for coming to my little space on the internet.
    <br />
    <br />
    <em>It's still under construction ;)</em>
  </p>
</Hero>
          <div className="decoration">
            <img
              src="/ram.png"
              alt="RAM Ram"
              className="image hero-image"
              title="RAM Ram"
            />
          </div>
        </div>
      </div>

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
          <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Link href="/project-page" style={linkStyle}>Project Page</Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}