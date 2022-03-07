import { FC } from "react";
interface IStoryViewProps {}

const StoryView: FC<IStoryViewProps> = (props) => {
  return (
    <div className="story-container bg-[red] w-full h-[20%] flex justify-center">
      <span>Story View</span>
    </div>
  );
};

export default StoryView;
