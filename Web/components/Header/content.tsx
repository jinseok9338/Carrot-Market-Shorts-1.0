import { ReactNode } from "react";

interface IconsProps {
  children:ReactNode;
  menuText:string
}


const Icons = ({ children,menuText }: IconsProps) => (
  <div className="flex flex-col w-[27px] h-[27px]">
    {children}
    <span>{menuText}</span>
  </div>
);

export default Icons;

// export const Content = styled.div`
//   display: flex;
//   height: 100%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;
