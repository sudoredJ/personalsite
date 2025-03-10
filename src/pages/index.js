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
    width: '20px',
    height: '20px',
    backgroundColor: '#4A4A4A',
    borderRadius: '50%',
    position: 'absolute',
    cursor: 'pointer',
    transition: 'transform 0.5s ease',
    border: '2px solid #333',
    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Store screws in an array to track their rotations
  const [screwRotations] = useState([0, 0, 0, 0]);

  const handleScrewClick = (event) => {
    event.currentTarget.classList.toggle('rotated');
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
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start', 
                  flex: 1 
                }}>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <Link href="/globevid"><p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>My story so far</p></Link>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <Link href="/contact"><p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>Contact</p></Link>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <Link href="/aiart"><p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>View my art</p></Link>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <Link href="/project-page"><p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>Project Page</p></Link>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <a className="button" href="#" data-toggle="audio" onClick={() => router.push('/blog')}>BLOG</a>
                    <a href="https://x.com/0xredJ" target="_blank" rel="noopener noreferrer">
                      <img src="/twitter.gif" alt="Twitter" style={{ width: '25%', height: 'auto', marginLeft: '10px' }}/>
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
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <a href="https://jared19.bandcamp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>My music</a>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <a href="https://www.goodreads.com/user/show/172937649-jared19" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>GoodReads</a>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <Link href="/YTMusic"><p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>Music Collection Project</p></Link>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <a href="https://www.youtube.com/channel/UCUJm8_b7mSzak-pvZv3ykdw" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>YouTube Channel</a>
                  </div>
                  <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                    <Link href="/bucketlist"><p style={{ color: '#FFFFFF', textDecoration: 'underline', fontSize: '20px' }}>My Bucket List</p></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}