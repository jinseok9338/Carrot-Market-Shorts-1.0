import { FC, useState } from "react";
import { Actions } from "./actions";
import { ChangeFeed } from "./changeFeed";
import { SwipeableVideos } from "./swipable";
import Video from "./video";

interface IVideoProps {}
// TODO use ScrollTo and useRef to scroll down to the video
export const VideoIndex: FC<IVideoProps> = ({}) => {
  const sources = ["/videos/playing.mp4", "/videos/playing.mp4"];
  return (
    <SwipeableVideos sources={sources}>
      <div className={`inner-container h-full w-full flex flex-col`}>
        <ChangeFeed />
        <Actions />
        {sources.map((source) => (
          <div className="flex-[1] overflow-hidden">
            <Video source={source} key={source} />
          </div>
        ))}
      </div>
    </SwipeableVideos>
  );
};

// const SliderContent = styled.div`
//   transform: translateX(-${props => props.translate}px);
//   transition: transform ease-out ${props => props.transition}s;
//   height: 100%;
//   width: ${props => props.width}px;
//   display: flex;
// `
