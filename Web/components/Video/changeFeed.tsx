import { FC, useState } from "react";
interface IChangeFeedProps {}

export const ChangeFeed: FC<IChangeFeedProps> = ({}) => {
  const [toggle, setToggle] = useState("foryou");
  const toggleHighlight = (id: string) => {
    if (id == "foryou" && toggle == "following") {
      setToggle("foryou");
      //TODO Change the feed later
      //TODO Change the font the font is ugly as hell
    } else if (id == "following" && toggle == "foryou") {
      setToggle("following");
    }
  };

  return (
    <div className="z-[6] w-[50vw] h-[10vh] flex justify-between relative top-[6vh] left-[25%]">
      <span
        className={`${
          toggle == "foryou" ? "text-[white]" : "text-[white]/[0.7]"
        } font-[400]  text-[1.1rem] cursor-pointer`}
        id={"foryou"}
        onClick={(e) => {
          toggleHighlight(e.currentTarget.id);
        }}
      >
        for you
      </span>
      <span
        className={`font-[400]  text-[1.1rem] cursor-pointer ${
          toggle == "following" ? "text-[white]" : "text-[white]/[0.7]"
        }`}
        id={"following"}
        onClick={(e) => {
          toggleHighlight(e.currentTarget.id);
        }}
      >
        following
      </span>
    </div>
  );
};
