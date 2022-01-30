import { FC } from "react";
interface IWrapperProps {}

export const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};
