import { FC, useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import ReactPlayer from "react-player";
import { Wrapper } from "./wrapper";

interface ISwiperProps {}
// I suspect it has something to do with tailwind css
const videos = [
  "/videos/playing.mp4",
  "/videos/playing.mp4",
  "/videos/playing.mp4",
];

const pages = [
  "https://source.unsplash.com/600x600/?girl",
  "https://source.unsplash.com/600x600/?girl",
  "https://source.unsplash.com/600x600/?girl",
];

export const SwiperView: FC<ISwiperProps> = ({ children }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    // window is accessible here.
    const height = window.innerHeight;
    setHeight(height);
  }, []);

  const [index, setindex] = useState(0);
  // Set the drag hook and define component movement based on gesture data
  const [props, api] = useSprings(pages.length, (i) => ({
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
        console.log(height);
        const y = (i - index) * height + (active ? my : 0);
        const scale = active ? 1 - Math.abs(my) / height / 2 : 1;
        console.log(scale);
        return { y, scale, display: "block" };
      });
    }
  );

  return (
    <div className="wrapper">
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          className="page"
          {...bind()}
          key={i}
          style={{ display, y }}
        >
          <animated.div
            style={{ scale, backgroundImage: `url(${pages[i]})` }}
          />
        </animated.div>
      ))}
    </div>
  );
};

{
  /*<animated.div
          className="page"
          {...bind()}
          key={i}
          style={{ display, y }}
        >
          <Wrapper scale={scale}>
            <ReactPlayer
              playing={i == index ? true : false}
              id={videos[i]}
              muted
              url={videos[i]}
              width="100%"
              height="100%"
            />
        </Wrapper>
        </animated.div>*/
}
