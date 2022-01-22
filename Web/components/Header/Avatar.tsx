import { FC } from "react";
interface IAvatarProps {}

export const Avatar: FC<IAvatarProps> = () => {
  return (
    <div className="flex-[0_0_40px] ml-[30px] relative cursor-pointer">
      <img src="https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg" />
    </div>
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
