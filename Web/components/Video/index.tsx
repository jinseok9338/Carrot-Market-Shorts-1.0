import { FC } from "react";
interface IVideoProps {}

export const Video: FC<IVideoProps> = ({}) => {
  return (
    <div className="video border-[1px] border-[white] bg-[white] w-full h-full absolute snap-start top-0 bottom-0 overflow-hidden">
      <video
        controls
        autoPlay
        muted
        className="video__player w-auto h-auto object-fill min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <source src="/videos/playing.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
