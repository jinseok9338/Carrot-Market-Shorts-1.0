import { FC, ReactNode } from "react";
import Button from "../Button";
export interface IPostCardHeaderProps {}

export const PostCardHeader: FC<IPostCardHeaderProps> = ({ post }: any) => {
  return (
    <div className="header flex justify-between">
      <div className="person-container flex">
        <img
          className="flex justify-between h-[56px] w-[56px] rounded-full"
          src={post?.author?.avatar}
        ></img>
        <div className="info flex flex-col justify-center ml-[12px]">
          <a className="author font-[700] text-[18px] leading-[24px] mr-[5px] mb-[5px] flex underline hover:decoration-1">
            {post?.author?.username}
            <span className="mt-[1px] ml-[4px] font-[400] text-[14px] text-[black]">
              {post?.author?.name}
            </span>
          </a>
          <div className="inline">
            <span>{post?.description}</span>
            {post?.tags.map((tag, index) => (
              <a
                className="tag cursor-pointer font-[bold] ml-[4px] text-[16px] underline hover:decoration-1"
                key={index}
              >
                {tag.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[118px] h-[28px] font-[600] text-[16px]">
        <Button fontSize={14} outlined>
          {"Seguir"}
        </Button>
      </div>
    </div>
  );
};

// export const Tag = styled.a`
//   cursor: pointer;
//   font-weight: bold;
//   margin-left: 4px;
//   font-size: 16px;
//   :hover {
//     text-decoration: underline;
//   }
// `;

// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const PersonContainer = styled.div`
//   display: flex;
// `;

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 12px;
// `;

// export const Author = styled.a`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 24px;
//   margin-right: 5px;
//   margin-bottom: 5px;
//   display: flex;
//   :hover {
//     text-decoration: underline;
//   }
//   > span {
//     margin-top: 1px;
//     margin-left: 4px;
//     font-weight: 400;
//     font-size: 14px;
//     color: var(--black);
//   }
// `;

// export const Description = styled.div`
//   display: inline;
// `;

// export const ButtonContainer = styled.div`
//   width: 118px;
//   height: 28px;
//   font-weight: 600;
//   font-size: 16px;
// `;
