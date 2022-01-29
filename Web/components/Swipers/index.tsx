import { FC, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface ISwiperProps {}

export const SwiperView: FC<ISwiperProps> = (props) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [end, setEnd] = useState(() => true); // For pagination
  const [position, setPosition] = useState(0);
  const myRef: any = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const PicList = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];

  const nextVideo = () => {
    console.log("next video played");
  };

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ active, movement: [mx, my], swipe: [swipeX, swipeY], cancel }) => {
      console.log(swipeY);
      if (swipeY == 1) {
        // setPosition((p) => Math.min(Math.max(-1, p + swipeY), 1));
        // executeScroll; // Go to the next Slide
        // go to the previous video
      }
      if (swipeY == -1) {
        // setPosition((p) => Math.min(Math.max(-1, p + swipeY), 1));
        // executeScroll; // Go to the next Slide
        // go to the next video
      }

      api.start({ y: active ? my : 0, immediate: active }), { axis: "y" };
    }
  );
  return (
    <animated.div {...bind()} style={{ y, touchAction: "pan-x" }}>
      {PicList.map((pic) => (
        <div
          className="h-screen
            w-screen flex items-center justify-center"
        >
          <img className="h-full w-full" src={pic}></img>
        </div>
      ))}
    </animated.div>
  );
};
