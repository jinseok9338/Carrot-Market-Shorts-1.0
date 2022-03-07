import { FC } from "react";
interface IStoryViewProps {}

const StoryView: FC<IStoryViewProps> = (props) => {
  return (
    <div className="story-container bg-[red] w-full h-[20%] flex justify-around">
      <div className="avatar-container">
        <img src="" className="rounded-full w-[30px] h-[30px]" />
      </div>
      <span>Story View</span>
    </div>
  );
};

export default StoryView;
