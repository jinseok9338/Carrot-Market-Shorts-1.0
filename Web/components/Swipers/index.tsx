import { FC, useRef, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag, Vector2 } from "@use-gesture/react";
import clamp from "lodash.clamp";

interface ISwiperProps {}

const pages = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

export const SwiperView: FC<ISwiperProps> = () => {
  const [ref, { height }] = useMeasure();

  const index = useRef(0);
  const [props, api] = useSprings(
    5, // Pages Length
    (i) => ({
      y: i * height,
      display: "block",
    })
  );

  // Set the drag hook and define component movement based on gesture data
  //Something is wrong cause it allows the right and left swipe but not up and down
  const bind = useDrag(
    ({ active, movement: [mx, my], swipe: [swipeY], cancel }) => {
      console.log(active, swipeY, my, index);
      if (active && swipeY != 0) {
        index.current = clamp(
          index.current + (swipeY > 0 ? 1 : -1),
          0,
          pages.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          //Out of bounds
          return { display: "none" };
        const y = (i - index.current) * height + (active ? my : 0);
        return { y, display: "block" };
      });
    }
  );
  return (
    <div ref={ref} className="w-screen h-screen bg-[#000000] overflow-hidden">
      {props.map(({ y, display }, i) => (
        <animated.div
          className="absoulte w-full h-full touch-none"
          {...bind()}
          key={i}
          style={{ display, y }}
        >
          <animated.img
            src="https://picsum.photos/200/300"
            className="touch-none bg-cover bg-no-repeat bg-[center_center] w-full h-full"
          />
        </animated.div>
      ))}
    </div>
  );
};
