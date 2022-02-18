import { ReactNode } from "react";
import { useProcess } from "../../utils/ProcessLoader/useProcess";

interface IconsProps {
  children?: ReactNode;
  menuText?: string;
}

const Icons = ({ children, menuText }: IconsProps) => {
  const process = useProcess();

  return (
    <div
      onClick={() => process?.setProcess!(menuText!)}
      className="flex flex-col w-7 h-full justify-center items-center m-[0.5rem] pb-[12px] cursor-pointer"
    >
      {children}
      <span className="text-[white] font-[400] text-[0.7rem]">{menuText}</span>
    </div>
  );
};

export default Icons;

// export const Content = styled.div`
//   display: flex;
//   height: 100%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;
