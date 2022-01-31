import { FC } from "react";
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

//TODO Make the wrapper for the video
// This wrapper that has relative position will adhere to the animated div Done
// 1. we need a container that contains the icons for the share like and comment Done
// Make the span and the icon together Done
// 2. we need an Avatar Done
// 3. we need a container for the product Info and location

export const Wrapper: FC<IWrapperProps> = ({ children, scale }) => {
  return (
    <animated.div style={{ scale }}>
      <div className="absolute w-[60vw] h-[9vh] left-[2vw] bottom-[2vh] z-10 flex justify-around items-start flex-col">
        <div className="flex justify-between">
          <span className="font-bold text-[0.8rem] text-[black]  cursor-pointer userId mr-2">
            @Jinseok9338
          </span>
          <span className="font-[500] text-[0.8rem] text-[black]/[0.9] playtime">
            1.22
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
      <div className="absolute w-[14vw] h-[34vh] right-[2vw] bottom-[5vh] z-10 flex justify-around items-center flex-col">
        <div className="w-11 mb-3 h-11 flex justify-center items-center rounded-full bg-gray-500 text-[1rem] text-white cursor-pointer">
          <img
            src="https://source.unsplash.com/100x100/?girl"
            className="rounded-full"
          />
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          className="text-[2rem] text-[white] cursor-pointer"
        />
        <span className="font-[500] text-[0.8rem] text-[white] ">112</span>
        <FontAwesomeIcon
          icon={faComment}
          className="text-[2rem] text-[white] cursor-pointer"
        />
        <span className="font-[500] text-[0.8rem] text-[white]">122</span>
        <FontAwesomeIcon
          icon={faShare}
          className="text-[2rem] text-[white] cursor-pointer"
        />
        <span className="font-[500] text-[0.8rem] text-[white]">share</span>
      </div>
      {children}
    </animated.div>
  );
};
