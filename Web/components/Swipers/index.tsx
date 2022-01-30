import { FC, useRef, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag, Vector2 } from "@use-gesture/react";
import clamp from "lodash.clamp";

interface ISwiperProps {}

const pages = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/227/200/300",
  "https://picsum.photos/id/247/200/300",
  "https://picsum.photos/id/287/200/300",
  "https://picsum.photos/id/207/200/300",
];

export const SwiperView: FC<ISwiperProps> = () => {
  const [ref, { height, width }] = useMeasure();

  const index = useRef(0);

  // Set the drag hook and define component movement based on gesture data
  //Something is wrong cause it allows the right and left swipe but not up and down
  const [props, api] = useSprings(pages.length, (i) => ({
    y: i * height,
    scale: 1,
    display: "block",
  }));
  const bind = useDrag(
    ({ active, movement: [mx, my], direction: [xDir, yDir], cancel }) => {
      if (active && Math.abs(my) > height / 4) {
        // The Smaller the number the smaller the thersh hold it needs to go over... Danm too long to figure this out...
        index.current = clamp(
          index.current + (yDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const y = (i - index.current) * height + (active ? my : 0);
        const scale = active ? 1 - Math.abs(my) / height / 2 : 1;
        return { y, scale, display: "block" };
      });
    }
  );
  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-[#000000] relative overflow-hidden"
    >
      {props.map(({ y, display }, i) => (
        <animated.div
          className="absolute w-full h-full touch-none"
          {...bind()}
          key={i}
          style={{ display, y }}
        >
          <animated.div
            style={{ backgroundImage: `url(${pages[i]})` }}
            className="touch-none bg-cover bg-no-repeat bg-[center_center] w-full h-full"
          />
        </animated.div>
      ))}
    </div>
  );
};
