import {useEffect, useRef } from 'react';

const VideoPlayer = (url) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  
  useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;

    playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloudName:  "dyizrug8d", 
      secure: true
    });
  }, []);
  
    console.log(url)

  return (
    <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)',width: '70vw', margin : 'auto',marginTop : '10vh'}}>
      <video
        ref={videoRef}
        className="cld-video-player cld-fluid"
        controls
        autoPlay
        data-cld-public-id={url.url}
      />
    </div>
  )
}

export default VideoPlayer;