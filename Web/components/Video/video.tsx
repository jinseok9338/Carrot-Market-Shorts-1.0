import { useState, useRef } from "react";
// Getting rid of all the svg

const Video = ({ source }: { source: string }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    console.log(videoRef.current);
    if (playing) {
      (videoRef as any).current.pause();
      setPlaying(false);
    } else {
      (videoRef as any).current.play();
      setPlaying(true);
    }
  };

  return (
    <video
      autoPlay
      muted
      ref={videoRef}
      onClick={onVideoPress}
      className="video__player w-screen h-screen object-fill min-w-full min-h-full translate-y-[-50%]"
    >
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default Video;
