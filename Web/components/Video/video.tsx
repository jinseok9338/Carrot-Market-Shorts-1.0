import { useState, useRef } from "react";

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
    <div>
      <video
        autoPlay
        muted
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player w-auto h-auto object-fill min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
