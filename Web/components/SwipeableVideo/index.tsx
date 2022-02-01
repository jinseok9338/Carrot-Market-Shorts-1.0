import { FC, useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import ReactPlayer from "react-player";
import { Wrapper } from "./wrapper";

interface ISwiperProps {}
// I suspect it has something to do with tailwind css
const videos = [
  "https://youtu.be/JItNDnOECos",
  "/videos/playing.mp4",
  "https://youtu.be/ceqqHY5E4-w",
];

const pages = [
  "https://source.unsplash.com/600x600/?girl",
  "https://source.unsplash.com/600x600/?girl",
  "https://source.unsplash.com/600x600/?girl",
];

export const SwiperView: FC<ISwiperProps> = ({ children }) => {
  const [height, setHeight] = useState(1000);
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
        const y = (i - index) * height + (active ? my : 0);
        const scale = active ? 1 - Math.abs(my) / height / 2 : 1;
        return { y, scale, display: "block" };
      }),
        [index];
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
          <Wrapper scale={scale}>
            <ReactPlayer
              style={{ pointerEvents: "none" }}
              playing={i === index ? true : false}
              id={videos[i] + Math.random()}
              muted
              url={videos[i]}
              width="100%"
              height="100%"
              onEnded={
                () => console.log("The vudio has ended ")
                // useCallback to update index and fireup the api
              }
            />
          </Wrapper>
        </animated.div>
      ))}
    </div>
  );
};

{
  /**/
}
