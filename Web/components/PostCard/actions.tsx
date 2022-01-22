import { FC } from "react";
interface IActionsProps {
  post: any;
}

// export const Action = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 18px;
//   font-weight: 700;
//   margin-right: 25px;
//   cursor: pointer;
//   img {
//     width: 32px;
//     height: 32px;
//     margin-right: 4px;
//   }
// `;

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

// export const Actions = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0 10px;
//   margin-top: 12px;
// `;

// export const Action = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 18px;
//   font-weight: 700;
//   margin-right: 25px;
//   cursor: pointer;
//   img {
//     width: 32px;
//     height: 32px;
//     margin-right: 4px;
//   }
// `;
