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
          <h1 style={titleStyle}>For the last eight years I have been amassing, discarding, <br></br> and curating over 20k songs on my YouTube Music account</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button onClick={playAudio} style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}><h2>Click me!</h2></button> {/* Button to play the audio */}
            <div id="audio" className="box open-left" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <audio ref={audioRef} src="/balls.mp3" /> {/* Add this line */}
              
            <p style={{ color: '#FFFFFF', fontSize: '16px', lineHeight: '1.5' }}>
              roughly 20,000 songs have cycled through my account. When I get tired of a song, it gets removed from the library, while I try to keep the best ones.
              <br></br> Now, there is some semblance of order to these playlist names. For example:
              <br />
              - <b>CST</b> — Playlists with this header are made for my Cassette Deck at home, and are best listened to from start to finish. I burn these mixes onto custom cassettes.
              <br /><br />
              - <b>DRVBE</b> — "Drive Vibe" For when I used to drive 45 minutes to school, each way, and get there at 7:00 in the morning.
              <br /><br />
              - <b>CVBE</b> — "College Vibe" for when I am running around St. Louis, 45 minutes late for class, and going to bed at 7:00 in the morning ;)
              <br /><br />
              Everything else, you gotta figure out yourself, if you have the time to waste. I don't have the energy to sit here and catalogue what everything means, and to be honest, a good chunk of it is lost to time.
            </p>
            </div>
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