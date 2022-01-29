import { FC } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface ISwiperProps {}

export const SwiperView: FC<ISwiperProps> = (props) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });
  return (
    <animated.div {...bind()} style={{ x, y }}>
      <p>Hello?</p>
    </animated.div>
  );
};
