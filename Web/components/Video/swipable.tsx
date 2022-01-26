import config from "next/config";
import { FC, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface ISwipeableProps {
  sources: string[];
}

export const SwipeableVideos: FC<ISwipeableProps> = ({ children, sources }) => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      setIndex(index >= sources.length - 1 ? index : index + 1);
      console.log(index, "index");
    },
    onSwipedDown: () => {
      setIndex(index <= 0 ? index : index - 1);
      console.log(index, "index");
    },
    ...config,
  });

  return (
    <div
      className={`video bg-[white] w-screen h-screen relative snap-start m-[0_auto] overflow-scroll translate-y-[-${
        height * index
      }vh]`}
      {...handlers}
    >
      {children}
    </div>
  );
};
