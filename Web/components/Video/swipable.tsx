import config from "next/config";
import { FC } from "react";
import { useSwipeable } from "react-swipeable";
import Video from "./video";

interface ISwipeableProps {}

export const SwipeableVideos: FC<ISwipeableProps> = ({ children }) => {
  const handlers = useSwipeable({
    onSwipedUp: (eventData) =>
      console.log("User Swiped Up! play NextVideo", eventData),
    onSwipedDown: (eventData) =>
      console.log("User Swiped Down! play PreviousVideo", eventData),
    ...config,
  });

  return (
    <div
      className="video bg-[white] w-screen h-screen relative snap-start m-[0_auto] overflow-hidden"
      {...handlers}
    >
      {children}
    </div>
  );
};
