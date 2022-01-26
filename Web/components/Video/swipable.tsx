import config from "next/config";
import { FC, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Video from "./video";

interface ISwipeableProps {
  sources: string[];
}

export const SwipeableVideos: FC<ISwipeableProps> = ({ children, sources }) => {
  const [index, setIndex] = useState(0);
  const height = window.innerHeight;

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      setIndex(index >= sources.length - 1 ? index : index + 1);
      console.log(index, "index");
    },
    onSwipedDown: (eventData) => {
      setIndex(index <= 0 ? index : index - 1);
      console.log(index, "index");
    },
    ...config,
  });

  return (
    <div
      className={`video bg-[white] w-screen h-screen relative snap-start m-[0_auto] overflow-hidden translate-y-[-${
        height * index
      }vh]`}
      {...handlers}
    >
      {children}
    </div>
  );
};
