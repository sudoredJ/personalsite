import React, { useState, useRef } from 'react';

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playTextStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    position: 'absolute',
    top: '10%', // position the text on top of the video
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    fontSize: '24px',
    zIndex: 1
  };
  

  const containerStyle = {
    position: 'relative',
    width: '60vw', // adjust these values to make the video smaller
    height: '60vh', // adjust these values to make the video smaller
  };

  return (
    <div style={containerStyle}>
     <video
  ref={videoRef}
  src="/personalsite.mp4"
  style={{ width: '100%', height: '100%' }}
  muted
  playsInline
  preload="metadata"
  onClick={togglePlay}
  onEnded={() => setIsPlaying(false)} // add this line
>
  Your browser does not support the video tag.
</video>
      {!isPlaying && (
        <div onClick={togglePlay} style={playTextStyle}>
          Click here to see my journey so far
        </div>
      )}
    </div>
  );
};

export default VideoComponent;