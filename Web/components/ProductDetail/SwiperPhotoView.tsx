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
  const [visible, setVisible] = useState(false);
  const [index, setindex] = useState(0);

  useLayoutEffect(() => {
    // window is accessible here.
    const width = window.innerWidth;
    setWidth(width);
  }, []);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  }, [index]);

  //When index changes cancel the clearTime Out and set the animation to none... I guess... but hard

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
            <div>
              <div
                className={`absolute right-[5vw] top-[2vh] bg-[grey] w-[4vw] h-[1.2rem] animate-fade  ${
                  visible ? "block " : "hidden"
                } `}
              >
                <span className="text-[0.7rem] font-[600]">
                  {i + 1}/{photos.length}
                </span>
              </div>
              <img className="w-full bg-white h-full" src={photos[i]} />
            </div>
          </animated.div>
        </>
      ))}
    </div>
  );
};

export default SwiperPhotoView;
