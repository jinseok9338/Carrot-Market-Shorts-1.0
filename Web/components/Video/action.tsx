import { FC, ReactNode } from "react";
interface IActionProps {
  text: string;
}

export const Action: FC<IActionProps> = ({ text, children }) => {
  return (
    <div className="w-full h-[50px] flex flex-col justify-center items-center">
      {children}
      <span className="text-white font-[mono] text-[0.7rem] cursor-pointer">
        {text}
      </span>
    </div>
  );
};
