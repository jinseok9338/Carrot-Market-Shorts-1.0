import { FC } from "react";
interface IAvatarProps {
  src: string;
}

export const Avatar: FC<IAvatarProps> = ({ src }) => {
  return (
    <img
      className="w-[50px] h-[50px] inline-block leading-[32px] rounded-full cursor-pointer box-border m-0 p-0 tabular-nums relative overflow-hidden whitespace-nowrap text-center align-middle text-white"
      src={src}
    />
  );
};

// export const Avatar = styled.div`
//   flex: 0 0 40px;
//   margin-left: 30px;
//   position: relative;
//   cursor: pointer;
//   > img {
//     width: 40px;
//     height: 40px;
//     display: inline-block;
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     font-feature-settings: 'tnum';
//     position: relative;
//     overflow: hidden;
//     color: #fff;
//     white-space: nowrap;
//     text-align: center;
//     vertical-align: middle;
//     line-height: 32px;
//     border-radius: 50%;
//   }
