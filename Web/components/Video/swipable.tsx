import { FC } from "react";
import SwipeableViews from "react-swipeable-views";
interface ISwipeableProps {
  sources: string[];
}

const styles = {
  slideContainer: {
    height: "100vh",
    width: "100vw",
  },
};

const Video = ({ source }: { source: string }) => (
  <video
    autoPlay
    muted
    className="video__player w-auto h-auto object-fill min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  >
    <source src={source} type="video/mp4" />
  </video>
);

export const SwipeableVideos: FC<ISwipeableProps> = ({ sources }) => {
  return (
    <SwipeableViews containerStyle={styles.slideContainer} axis="y" resistance>
      {sources.map((source) => (
        <Video source={source} />
      ))}
    </SwipeableViews>
  );
};
