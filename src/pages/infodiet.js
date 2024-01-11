import React, { useRef } from 'react';
import Head from 'next/head';

export default function YTMusic() {
  const titleStyle = {
    fontSize: '2rem',
    margin: '1rem auto',
    color: '#FFFFFF',
    textAlign: 'center',
  };

  const audioRef = useRef(); // Create a ref for the audio element

  const playAudio = () => { // Function to play the audio
    audioRef.current.play();
  };

  return (
    <>
      <div>
        <Head>
          <title>My Music Collection Project</title>
        </Head>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#000',
            paddingTop: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button onClick={playAudio} style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}><h2>Click me!</h2></button> {/* Button to play the audio */}
            <div id="audio" className="box open-left" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <audio ref={audioRef} src="/balls.mp3" /> {/* Add this line */}
              <h1 style={{...titleStyle, textTransform: 'lowercase', fontFamily: 'Trebuchet MS'}}>
  For the last 8 years I have been amassing, discarding, and curating over 20k songs on my YouTube Music account. Check it out! :)
</h1>            </div>
          </div>
          <br></br>
          <p> </p>
          <a className="button" href="https://music.youtube.com/channel/UCUJm8_b7mSzak-pvZv3ykdw?si=UL1XzV3Lcaevhr-0" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', padding: '10px 20px' }}>Take me there</a>        
          <br></br>
          <a href="/" style={titleStyle}>Back to Home</a>
        </div>
      </div>
    </>
  );
}