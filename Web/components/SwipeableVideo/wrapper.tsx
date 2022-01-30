import { FC } from "react";
interface IWrapperProps {}

export const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  );
};
