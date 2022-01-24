import { FC } from "react";
import { Action } from "./action";
import { Actions } from "./actions";
import { Avatar } from "./Avatar";
import { ChangeFeed } from "./changeFeed";
import { SwipeableVideos } from "./swipable";
import Video from "./video";

interface IVideoProps {}
// TODO Make the video go over if one video is over use react-swipeable for the task

export const VideoIndex: FC<IVideoProps> = ({}) => {
  const sources = ["/videos/playing.mp4", "/videos/playing.mp4"];
  return (
    <SwipeableVideos>
      <ChangeFeed />
      <Actions />
      {sources.map((source) => (
        <Video source={source} />
      ))}
    </SwipeableVideos>
  );
};
