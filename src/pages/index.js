import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";
import Toggler from "../components/toggler";
import AnimatedLink from '../components/AnimatedLink';
import TypewriterSequence from '../components/TypewriterSequence';


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const linkSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', // Align text to the left
    color: '#FFFFFF',
    width: '100%', // Take full width of the parent
  };
  const router = useRouter();
  const ImageComponent = () => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} onClick={handleClick}>
        <img src={isClicked ? "/jaredm.gif" : "/00020-953883047.png"} alt="Jared M." width="800" height="217" />
        <p style={{ color: '#FFFFFF', cursor: 'pointer' }}>Click me!</p>
      </div>
    );
  }; 
  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'underline',
    fontSize: '20px',
    textAlign: 'left', // Align text to the left
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
  
  const screwStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: '#1a1a1a',
    borderRadius: '50%',
    position: 'absolute',
    cursor: 'pointer',
    transition: 'transform 0.5s ease',
    border: '1px solid rgba(255,255,255,0.1)',
    zIndex: 10
  };

  // Store screws in an array to track their rotations
  const [screwRotations] = useState([0, 0, 0, 0]);

  const handleScrewClick = (event) => {
    const currentRotation = event.currentTarget.style.transform || 'rotate(0deg)';
    const currentDegrees = parseInt(currentRotation.match(/\d+/) || 0);
    const newRotation = currentDegrees + 90;
    event.currentTarget.style.transform = `rotate(${newRotation}deg)`;
  };

  return (
    <div className="page-wrapper">
      <Stars />
      <CustomCursor />
  
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Navigation links or logo */}
          </nav>
        </div>
      </header>
  
      <div className="container">
        <div style={{ marginTop: '100px', marginBottom: '40px' }}>
          {isClient ? (
            <TypewriterSequence />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div>Hi, I'm Jared M.</div>
              <div>Welcome to my corner of the net</div>
            </div>
          )}
        </div>

        <div className="box-wrap" style={{ width: '40%', margin: '0 auto' }}>
          <div className="hinge left"></div>
          <div id="audio" className="box open-left">
            <div className="screw right"></div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              alignItems: 'flex-start',
              padding: '20px'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                flex: 1 
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <Link href="/globevid">
                    <p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>
                      My story so far
                    </p>
                  </Link>
                </div>
                <Link href="/contact">
                  <p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', marginBottom: '20px' }}>
                    Contact
                  </p>
                </Link>
                <Link href="/aiart">
                  <p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', marginBottom: '20px' }}>
                    View my art
                  </p>
                </Link>
                <Link href="/project-page">
                  <p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', marginBottom: '20px' }}>
                    Project Page
                  </p>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a className="button" href="#" data-toggle="audio" onClick={() => router.push('/blog')}>
                    Blog
                  </a>
                  <a href="https://x.com/redj_red" target="_blank" rel="noopener noreferrer">
                    <img src="/twitter.gif" alt="Twitter" style={{ width: '25%', height: 'auto', marginLeft: '10px' }} />
                  </a>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                flex: 1,
                marginLeft: '20px'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <a href="https://jared19.bandcamp.com/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>
                    My music
                  </a>
                </div>
                <a href="https://www.goodreads.com/user/show/172937649-jared19" target="_blank" rel="noopener noreferrer"
                   style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', display: 'block', marginBottom: '20px' }}>
                  GoodReads
                </a>
                <Link href="/YTMusic">
                  <p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', marginBottom: '20px' }}>
                    Music Collection Project
                  </p>
                </Link>
                <a href="https://www.youtube.com/channel/UCUJm8_b7mSzak-pvZv3ykdw" target="_blank" rel="noopener noreferrer"
                   style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', display: 'block', marginBottom: '20px' }}>
                  YouTube Channel
                </a>
                <Link href="/bucketlist">
                  <p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px', marginBottom: '20px' }}>
                    My Bucket List
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}