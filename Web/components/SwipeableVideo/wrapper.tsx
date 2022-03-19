import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faComment,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { animated, SpringValue } from "@react-spring/web";
interface IWrapperProps {
  scale: SpringValue<number>;
}

export const Wrapper: FC<IWrapperProps> = ({ children, scale }) => {
  const [liked, setLiked] = useState(false);

  // TODO UseEffect to set the default like, liked, productInfo and addresses
  // Need to cache the data in the redis first and read from the redis unless the data is changed??
  return (
    <animated.div style={{ scale }}>
      <div className="absolute w-[8vw] h-[2.5vh] right-[1vw] top-[4vh] bg-[black]/75 rounded-[3px] flex justify-center">
        <span className="font-[500] text-[0.8rem] text-[white]/[0.9] playtime">
          1:22
        </span>
      </div>
      <div className="absolute w-[60vw] h-[9vh] left-[2vw] bottom-[5vh] z-10 flex justify-around items-start flex-col">
        <div className="flex justify-between">
          <span className="font-bold text-[0.8rem] text-[black]  cursor-pointer userId mr-2">
            @Jinseok9338
          </span>
        </div>
        <div className="flex tag list">
          <FontAwesomeIcon
            icon={faAddressBook}
            className="text-[1.1rem] text-[black] mr-1"
          />
          <span className="font-[700] text-[0.8rem] text-[black]/[0.7] cursor-pointer tag">
            #Gimpo
          </span>
        </div>
        <span className="font-[700] text-[0.8rem] text-[black]/[0.7] cursor-pointer tag">
          Product Title
        </span>
      </div>
      <div className="absolute w-[14vw] h-[34vh] right-[0vw] bottom-[5vh] z-10 flex justify-around items-center flex-col">
        <div className="w-11 mb-3 h-11 flex justify-center items-center rounded-full bg-gray-500 text-[1rem] text-white cursor-pointer">
          <img
            src="https://source.unsplash.com/100x100/?girl"
            className="rounded-full border-2 border-[white]"
          />
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => setLiked((prev) => !prev)} // Update the like
          className={`text-[2rem] ${
            liked ? "text-[#f3a0a0]" : "text-[white]"
          } text-[white] cursor-pointer`}
        />
        <span className="font-[500] text-[0.8rem] text-[white] z-20 ">112</span>
        <FontAwesomeIcon
          icon={faComment}
          className="text-[2rem] text-[white] cursor-pointer"
        />
        <span className="font-[500] text-[0.8rem] text-[white] z-20 ">122</span>
        <FontAwesomeIcon
          icon={faShare}
          className="text-[2rem] text-[white] cursor-pointer"
        />
        <span className="font-[500] text-[0.8rem] text-[white] z-20">
          share
        </span>
      </div>
      {children}
    </animated.div>
  );
};
