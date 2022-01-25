import { FC, useState } from "react";
import { Actions } from "./actions";
import { ChangeFeed } from "./changeFeed";
import { SwipeableVideos } from "./swipable";
import Video from "./video";

interface IVideoProps {}
// TODO use ScrollTo and useRef to scroll down to the video
export const VideoIndex: FC<IVideoProps> = ({}) => {
  const getWidth = () => window.innerWidth;
  const width = getWidth();
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);

  const sources = ["/videos/playing.mp4", "/videos/playing.mp4"];
  return (
    <SwipeableVideos>
      <div
        className={`h-full w-[${width.toString()}] flex translate-y-[-${translate.toString()}px] `}
      >
        <ChangeFeed />
        <Actions />
        {sources.map((source) => (
          <>
            <Video source={source} key={source} />
            <Video source={source} key={source} />
          </>
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
