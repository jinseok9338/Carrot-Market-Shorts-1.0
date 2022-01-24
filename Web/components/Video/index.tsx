import { FC } from "react";
import { Actions } from "./actions";
import { ChangeFeed } from "./changeFeed";
import { SwipeableVideos } from "./swipable";
import Video from "./video";

interface IVideoProps {}
// TODO use ScrollTo and useRef to scroll down to the video
export const VideoIndex: FC<IVideoProps> = ({}) => {
  const sources = ["/videos/playing.mp4", "/videos/playing.mp4"];
  return (
    <SwipeableVideos>
      <ChangeFeed />
      <Actions />
      {sources.map((source) => (
        <Video source={source} key={source} />
      ))}
    </SwipeableVideos>
  );
};
