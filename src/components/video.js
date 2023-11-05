import React from 'react';

const VideoComponent = () => {
  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
      <div style={{ textAlign: 'center', marginBottom: '5px' }}>My Story So Far</div>
      <video
        src="/path-to-your-video.mp4" // Replace with the path to your video file
        style={{ width: '200px', height: 'auto' }} // Set any desired width
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;