import { FC } from "react";
import { Action } from "./action";
import { Avatar } from "./Avatar";
interface IActionsProps {}

export const Actions: FC<IActionsProps> = (props) => {
  return (
    <div className="action-container flex flex-col justify-around items-center relative bottom-[-40vh] left-[80vw] w-[20vw] h-[40vh] z-[3]">
      <Avatar src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
      <Action text="4453"></Action>
      <Action text="231"></Action>
      <Action text="share"></Action>
    </div>
  );
};
