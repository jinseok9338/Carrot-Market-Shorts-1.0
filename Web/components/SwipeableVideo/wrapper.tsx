import { FC } from "react";
interface IWrapperProps {}

//TODO Make the wrapper for the video
// This wrapper that has relative position will adhere to the animated div
// 1. we need a container that contains the icons for the share like and comment
// 2. we need an Avatar
// 3. we need a container for the product Info and location

export const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="relative w-[12vw] h-[30vh] left-[87vw] top-[85vh] z-10 flex justify-around items-center flex-col">
        {/* <img src="/images/heart.png" className="mb-[-1rem]"></img>
        <span className="font-bold text-[0.9rem]">112</span>
        <img src="/images/comment.png" className="mb-[-1rem]"></img>
        <span className="font-bold text-[0.9rem]">112</span>
        <img src="/images/share.png" className="mb-[-1rem]"></img>
        <span className="font-bold text-[0.9rem]">share</span> */}
      </div>
      {children}
    </>
  );
};
