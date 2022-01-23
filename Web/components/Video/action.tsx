import { FC, ReactNode } from "react";
interface IActionProps {
  text: string;
  children: ReactNode;
}

export const Action: FC<IActionProps> = ({ text, children }) => {
  return (
    <div className="w-full h-[50px] flex flex-col justify-center items-center">
      {children}
      <span className="text-white text-[1rem]">{text}</span>
    </div>
  );
};
