import { FC } from "react";
import AddComments from "./addComments";
import Comments from "./comment";
import StoryView from "./storyView";
import SwiperView from "./swiperView";
interface IProdcutDetailProps {}

const ProdcutDetail: FC<IProdcutDetailProps> = (props) => {
  return (
    <div className="container h-full flex flex-col items-center">
      <StoryView />
      <SwiperView />
      <ProdcutDetail />
      <Comments />
      <AddComments />
    </div>
  );
};

export default ProdcutDetail;
