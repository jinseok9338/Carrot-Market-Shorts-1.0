import { FC } from "react";
interface IRecommendCardProps {
  recommend: any;
}

export const RecommendCard: FC<IRecommendCardProps> = ({ recommend }) => {
  return (
    <div className="recommendCard-container flex items-center w-full h-[45px] p-[0_16px]">
      <img className="w-[44px] h-[44px] mr-[12px]" src={recommend.avatar}></img>
      <div className="flex flex-col">
        <a className="font-[600] text-[17px] underline hover:decoration-1">
          {recommend.title}
        </a>
        <span className="font-[400] text-[14px] text-tintBlack/[0.5]">
          {recommend.views}
        </span>
      </div>
    </div>
  );
};

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 45px;
//   padding: 0 16px;
// `;

// export const Avatar = styled.img`
//   width: 44px;
//   height: 44px;
//   margin-right: 12px;
// `;

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   > a {
//     font-weight: 600;
//     font-size: 17px;
//     :hover {
//       text-decoration: underline;
//     }
//   }
//   > span {
//     font-weight: 400;
//     font-size: 14px;
//     color: rgba(22, 24, 35, 0.5);
//   }
// `;
