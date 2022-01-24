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
      className="video bg-[white] w-full h-full absolute snap-start top-0 bottom-0 overflow-hidden"
      {...handlers}
    >
      {children}
    </div>
  );
};
