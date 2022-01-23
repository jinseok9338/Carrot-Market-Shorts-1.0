import { FC } from "react";
interface IActionsProps {
  post: any;
}


const Action = ({ src, link }: any) => (
  <div className="flex items-center text-[18px] font-[700] mr-[25px] cursor-pointer">
    <img className="w-[32px] h-[32px] mr-[4px]" src={src}></img>
    <a>{link}</a>
  </div>
);

export const Actions: FC<IActionsProps> = ({ post }) => {
  return (
    <div className="actions flex items-center p-[0_10px] mt-[12px]">
      <Action src="/images/heartIcon.svg" link={post?.likes} />

      <Action src="/images/bubbleIcon.svg" link={post?.comments} />
      <Action src="/images/arrowIcon.svg" link={post?.replies} />
    </div>
  );
};




display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: stretch;
align-content: stretch;