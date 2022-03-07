import { FC } from "react";
interface IDrawerProps {
  login: string | null;
  children?: React.ReactElement | null;
}

export const Drawer: FC<IDrawerProps> = ({ children }) => {
  return (
    <div className="bg-[#FFECAA] h-fit rounded-[40px_40px_30px_30px] w-full absolute bottom-0">
      {children}
    </div>
  );
};
