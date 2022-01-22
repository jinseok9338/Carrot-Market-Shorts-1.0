import { FC } from "react";
import Button from "../Button";
import { RecommendCard } from "../RecommendCard";
import User from "../User";
import { BoxContainer } from "./BoxContainer";
interface ISuggestionsProps {
  people: any;
  items: any;
}

// export const Icon = styled.img`
//   width: 31px;
//   height: 31px;
//   margin-right: 15px;
// `;

const Icon = ({ src }: { src: string }) => (
  <img src={src} className="w-[31px] h-[31px] mr-[15px]"></img>
);

const DownloadImage = ({ src }: { src: string }) => (
  <img src={src} className="w-[170px] h-[50px] rounded-[5px] mb-[12px]"></img>
);

export const Suggestions: FC<ISuggestionsProps> = ({ people, items }) => {
  return (
    <div className="Suggestion-container flex-[0_0_330px] w-[330px] ml-[24px] xl:hidden">
      <div className="icon-container mb-[39px] text-left">
        <Icon src="/images/facebookIcon.svg"></Icon>
        <Icon src="/images/pinterestIcon.svg"></Icon>
        <Icon src="/images/twitterIcon.svg"></Icon>
      </div>
      <BoxContainer boxHeaderText="Contas sugeridas">
        {people.map((person: any, index: any) => (
          <div className="flex items-center mb-[20px]">
            <User key={index} user={person}></User>
            <div className="w-[95px] h-[28px] font-[600] text-[16px] ml-[auto]">
              <Button fontSize={14} outlined>
                Seguir
              </Button>
            </div>
          </div>
        ))}
      </BoxContainer>
      <BoxContainer boxHeaderText="Descobrir">
        {items.map((item: any, index: any) => (
          <div className="flex items-center mb-[20px]">
            <RecommendCard key={index} recommend={item}></RecommendCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrowIcon ml-[auto] h-[30px] w-[14px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ))}
      </BoxContainer>
      <DownloadImage src="/images/appstore.png"></DownloadImage>
      <DownloadImage src="/images/playstore.png"></DownloadImage>
      <DownloadImage src="/images/amazon.png"></DownloadImage>
    </div>
  );
};

// export const ArrowIcon = styled(ArrowForwardIos)`
//   margin-left: auto;
//   height: 20px;
//   width: 14px;
// `;

// export const Container = styled.div`
//   flex: 0 0 330px;
//   width: 330px;
//   margin-left: 24px;
//   @media (max-width: 1200px) {
//     display: none;
//   }
// `;

// export const IconsContainer = styled.div`
//   margin-bottom: 39px;
//   text-align: left;
// `;

// export const Icon = styled.img`
//   width: 31px;
//   height: 31px;
//   margin-right: 15px;
// `;

// export const ButtonContainer = styled.div`
//   width: 95px;
//   height: 28px;
//   font-weight: 600;
//   font-size: 16px;
//   margin-left: auto;
// `;

// export const Item = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const InfoName = styled.a`
//   font-weight: 600;
//   font-size: 17px;
//   :hover {
//     text-decoration: underline;
//   }
// `;

// export const InfoUserName = styled.span`
//   font-weight: 400;
//   font-size: 14px;
//   color: rgba(22, 24, 35, 0.5);
// `;

// export const ArrowIcon = styled(ArrowForwardIos)`
//   margin-left: auto;
//   height: 20px;
//   width: 14px;
// `;

// export const DownloadImage = styled.img`
//   width: 170px;
//   height: 50px;
//   border-radius: 5px;
//   margin-bottom: 12px;
// `;
