import { useLayoutEffect } from "@react-spring/shared";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import { FC, useEffect, useState } from "react";
interface ISwiperPhotoViewProps {
  photos: string[];
}

export const SwiperPhotoView: FC<ISwiperPhotoViewProps> = ({ photos }) => {
  const [width, setWidth] = useState(400);

  useLayoutEffect(() => {
    // window is accessible here.
    const width = window.innerWidth;
    setWidth(width);
  }, []);

  const [index, setindex] = useState(0);
  // Set the drag hook and define component movement based on gesture data
  const [props, api] = useSprings(photos?.length, (i) => ({
    x: i * width,
    scale: 1,
    display: "block",
  }));
  const bind = useDrag(
    ({ active, movement: [_mx, my], direction: [_xDir, yDir], cancel }) => {
      if (active && Math.abs(_mx) > width / 4) {
        // The Smaller the number the smaller the thersh hold it needs to go over..
        setindex((index) =>
          clamp(index + (_xDir > 0 ? -1 : 1), 0, photos?.length - 1)
        );

        cancel();
      }
      api.start((i) => {
        if (i < index - 1 || i > index + 1) return { display: "none" };
        const x = (i - index) * width + (active ? _mx : 0);
        const scale = active ? 1 - Math.abs(_mx) / width / 2 : 1;
        return { x, scale, display: "block" };
      }),
        [index];
    }
  );

  return (
    <div className="wrapperForPhoto">
      {props.map(({ x, display, scale }, i) => (
        <>
          <animated.div
            className="page"
            {...bind()}
            key={i}
            style={{ display, x }}
          >
            <div className="absolute right-[2vw] top-[2vh] bg-[grey] ">
              {i + 1}/{photos.length}
            </div>
            <img className="w-full bg-transparent h-full" src={photos[i]} />
          </animated.div>
        </>
      ))}
    </div>
  );
};

export default SwiperPhotoView;
