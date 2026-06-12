import React from 'react';
import './VideoTypography.css';

const VideoTypography = () => {
  return (
    <section className="video-typography-section">
      <div className="video-typography-container">
        {/* We use a high-quality abstract tech placeholder video or fluid simulation */}
        <video 
          className="typography-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          src="https://cdn.pixabay.com/video/2019/01/22/20857-313172081_large.mp4"
        ></video>
        <div className="typography-mask">
          <h2 className="massive-text">INNOVATION</h2>
        </div>
      </div>
    </section>
  );
};

export default VideoTypography;
