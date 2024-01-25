import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";
import Toggler from "../components/toggler";
import AnimatedLink from '../components/AnimatedLink';


export default function Home() {

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
  <div className="hero-wrapper" style={{ marginTop: '100px' }}>
  <Hero title="Hi, I'm Jared M." index className="bouncy">
          <p className="hero-description small width" style={{ textAlign: 'center' }}>
        Thanks for coming to my (very unfinished) corner of hyperspace.
      </p>
    </Hero>
  </div>
  <br></br>
  <Toggler onToggle={handleToggle} />
  {toggledElements.element1 && (
  <div>
    <div class="box-wrap" style={{ width: '40%', margin: '0 auto' }}>
      <div class="hinge left"></div>
      <div id="audio" class="box open-left">
        <div class="screw right"></div>

        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ ...linkSectionStyle, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link href="/globevid"><p style={linkStyle}>My story so far</p></Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link href="/contact"><p style={linkStyle}>Contact</p></Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link href="/aiart"><p style={linkStyle}>View my art</p></Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link href="/project-page"><p style={linkStyle}>Project Page</p></Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
  <a className="button" href="#" data-toggle="audio" onClick={() => router.push('/blog')}>Blog</a>
  <a href="https://twitter.com/jared19_acc" target="_blank">
    <img src="/twitter.gif" alt="Twitter" style={{ width: '25%', height: 'auto', marginLeft: '10px' }}/>
  </a>
</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', marginBottom: '20px', flex: 1, marginTop: '20px' }}>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <a href="https://jared19.bandcamp.com/" target="_blank" style={linkStyle}>My music</a>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <a href="https://www.goodreads.com/user/show/172937649-jared19" target="_blank" style={linkStyle}>GoodReads</a>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link href="/YTMusic"><p style={linkStyle}>Music Collection Project</p></Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <a href="https://www.youtube.com/channel/UCUJm8_b7mSzak-pvZv3ykdw" target="_blank" style={linkStyle}>YouTube Channel</a>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link href="/bucketlist"><p style={linkStyle}>My Bucket List</p></Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
              <a href="https://youtu.be/KoZEpkjwAPw" target="_blank" style={linkStyle}>Introduction for Sigil.</a>
            </div>
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )}
    </div>
  </div>
  );
}