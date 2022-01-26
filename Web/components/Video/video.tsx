import { useState, useRef } from "react";

// Getting rid of all the svg

const Video = ({ source }: { source: string }) => {
  return (
    <video
      autoPlay
      muted
      ref={videoRef}
      onClick={onVideoPress}
      className={`video__player w-screen  object-cover min-w-full min-h-[90vh] scale-[1,-1] object-center`}
    >
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default Video;
