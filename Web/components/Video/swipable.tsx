import config from "next/config";
import { FC, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

//TODO useHook to passdown the videoRef

interface ISwipeableProps {
  sources: string[];
}

export const SwipeableVideos: FC<ISwipeableProps> = ({ children, sources }) => {
  const [index, setIndex] = useState(0);
  const videoRef: any = useRef(null);
  const [playing, setPlaying] = useState(true);

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

  const handlers = useSwipeable({
    onSwipedUp: () => {
      setIndex(index >= sources.length - 1 ? index : index + 1);
      window.scrollTo({
        behavior: "smooth",
        top: videoRef.current.offsetTop,
      });
      console.log(index, "index");
    },
    onSwipedDown: () => {
      setIndex(index <= 0 ? index : index - 1);
      console.log(index, "index");
    },
    ...config,
  });

  const videoRefFunc = { playing, setPlaying, onVideoPress, videoRef };

  return (
    <div
      className={`video bg-[white] w-screen h-screen relative snap-start m-[0_auto] overflow-scroll`}
      {...handlers}
    >
      {children}
    </div>
  );
};
