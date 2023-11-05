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

  // Updated styles for the play text
  const playTextStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    width: '500px', // Match the width of the video to center the text correctly
    position: 'absolute', // Position relative to the parent div
    top: '0', // Place at the top of the video
    left: '0', // Align to the left of the video
    right: '0', // Align to the right of the video
    margin: 'auto', // Center horizontally
    color: '#FFF',
    fontSize: '24px',
    zIndex: 1 // Ensuring it's above the video layer
  };

  // Styles for the container to position the whole component at the bottom right
  const containerStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 1000
  };

  // Styles for the video wrapper to position the text over the video
  const videoWrapperStyle = {
    position: 'relative', // Relative positioning for absolute child
    width: '500px', // Width of the video
    height: '500px' // Height of the video
  };

  return (
    <div style={containerStyle}>
      <div style={videoWrapperStyle}>
        <video
          ref={videoRef}
          src="/personalsite.mp4"
          style={{ width: '100%', height: '100%' }}
          muted
          playsInline
          preload="metadata"
          onClick={togglePlay}
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div onClick={togglePlay} style={playTextStyle}>
            Click here to see my journey so far
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
