import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";
import Toggler from "../components/toggler";

export default function Home() {

  const linkSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    width: '50%',
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
  const [toggledElements, setToggledElements] = useState({ element1: true, element2: false });
  const handleToggle = (elementKey) => {
    setToggledElements(prevState => ({
      ...prevState,
      [elementKey]: !prevState[elementKey]
    }));
  };
  return (
    <div className="page-wrapper">
      <CustomCursor />
      <Stars />
  
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Navigation links or logo */}
          </nav>
        </div>
      </header>
  
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="hero-wrapper">
          <Hero title="Hi, I'm Jared M." index>
            <p className="hero-description small width">
              Thanks for coming to my little corner of the internet.
              <br />
              <br />
              <em>It's still under construction ;)</em>
            </p>
          </Hero>
        </div>
      </div>
  
      <Toggler onToggle={handleToggle} />
      {toggledElements.element1 && (
        <div>
          <div class="box-wrap" style={{ width: '50%', margin: '0 auto' }}>
  <div class="hinge left"></div>
  <div id="audio" class="box open-left">
    <div class="screw right"></div>

    <div style={linkSectionStyle}>
      <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
        <Link href="/globevid"><p style={linkStyle}>My story so far</p></Link>
      </div>
      <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
        <Link href="/contact"><p style={linkStyle}>Contact</p></Link>
      </div>
      <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
        <Link href="/blog"><p style={linkStyle}>Blog</p></Link>
      </div>
      <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
        <Link href="/project-page"><p style={linkStyle}>Project Page</p></Link>
      </div>
      <a class="button" href="#" data-toggle="audio">I'm a Button! :D</a>
    </div>
  </div>
</div>
        </div>
      )}
    </div>
  );
}