import { FC, useRef, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag, Vector2 } from "@use-gesture/react";
import clamp from "lodash.clamp";
import ReactPlayer from "react-player";
import { Wrapper } from "./wrapper";

interface ISwiperProps {}

const pages = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/227/200/300",
  "https://picsum.photos/id/247/200/300",
  "https://picsum.photos/id/287/200/300",
  "https://picsum.photos/id/227/200/300",
];

const videos = [
  "/videos/playing.mp4",
  "/videos/playing.mp4",
  "/videos/playing.mp4",
];

export const SwiperView: FC<ISwiperProps> = ({ children }) => {
  const [ref, { height, width }] = useMeasure();
  const [index, setindex] = useState(0);

  // Set the drag hook and define component movement based on gesture data
  //Something is wrong cause it allows the right and left swipe but not up and down
  const [props, api] = useSprings(videos.length, (i) => ({
    y: i * height,
    scale: 1,
    display: "block",
  }));
  const bind = useDrag(
    ({ active, movement: [_mx, my], direction: [_xDir, yDir], cancel }) => {
      if (active && Math.abs(my) > height / 4) {
        // The Smaller the number the smaller the thersh hold it needs to go over..
        setindex((index) =>
          clamp(index + (yDir > 0 ? -1 : 1), 0, videos.length - 1)
        );

        cancel();
      }
      api.start((i) => {
        if (i < index - 1 || i > index + 1) return { display: "none" };
        if (i == videos.length) {
          // Pagination
        }
        const y = (i - index) * height + (active ? my : 0);
        const scale = active ? 1 - Math.abs(my) / height / 2 : 1;
        return { y, scale, display: "block" };
      });
    }
  );

  return (
    <div ref={ref} className="w-screen h-screen relative overflow-hidden">
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          className="absolute w-full h-[90vh] touch-none"
          {...bind()}
          key={i}
          style={{ display, y, scale }}
        >
          <Wrapper>
            <ReactPlayer
              playing={i == index ? true : false}
              id={videos[i]}
              muted
              url={videos[i]}
              playsInline={true}
              width="100%"
              height="100%"
              className={`video__player object-cover scale-[1,-1] object-center`}
            />
          </Wrapper>
        </animated.div>
      ))}
    </div>
  );
};
