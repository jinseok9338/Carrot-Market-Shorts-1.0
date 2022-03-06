import { FC } from "react";
interface IMeProps {}

// we need to make profile page that's scrollable ...
const Me: FC<IMeProps> = ({}) => {
  const images = [
    `https://picsum.photos/seed/${Math.random()}/800/800/?blur=2`,
    `https://picsum.photos/seed/${Math.random()}/800/800/?blur=2`,
    `https://picsum.photos/seed/${Math.random()}/800/800/?blur=2`,
    `https://picsum.photos/seed/${Math.random()}/800/800/?blur=2`,
  ];
  return (
    <div className=" w-full h-full flex flex-col items-center justify-start ">
      <div className="background h-[60%]">
        <img
          src="https://picsum.photos/800/800/?blur=2"
          className="bg-Profile-background w-full h-full"
        />
      </div>
      <img
        className="absolute avatar top-[40vh] rounded-full w-32 h-32 border-4 border-[white] z-20"
        src="https://picsum.photos/id/870/200/300?grayscale"
      />
      <div className="flex flex-col justify-start items-center  w-full h-[35vh]">
        <div className=" w-[85vw] h-[28vh] mt-[6vh] rounded-[20px] z-10 bg-[white] flex flex-col items-center">
          <span className="text-[#1E414D] text-[24px] mt-[5vh] leading-[29px] font-Montserrat">
            Jason
          </span>
          <span className="text-[#9C9C9C] text-[14px]  leading-[17px] font-Montserrat">
            NewYork State
          </span>
          <div className="flex flex-col h-[50%] w-[80%] justify-around mt-2">
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <span className=" text-[#424242] text-[24px] leading-[29px] text-center">
                  42
                </span>
                <span className="text-[#949494] text-[10px] leading-[12px] font-Montserrat">
                  products
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className=" text-[#424242] text-[24px] leading-[29px] text-center">
                  112
                </span>
                <span className="text-[#949494] text-[10px] leading-[12px] font-Montserrat">
                  followers
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className=" text-[#424242] text-[24px] leading-[29px] text-center">
                  150
                </span>
                <span className="text-[#949494] text-[10px] leading-[12px] font-Montserrat">
                  followings
                </span>
              </div>
            </div>
            <button className="bg-[#26B6E3] rounded-[40px] w-full h-12 focus:outline-none focus:shadow-outline">
              <span className="font-Montserrat text-[#FFFFFF] text-[22px] text-center leading-[27px]">
                follow
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="devider w-[95%] h-[1px] bg-[black]/[0.7] mb-2"></div>
      <div className="image-container grid grid-cols-3 ">
        {images.map((image) => (
          <img className="cursor-pointer" src={image} />
        ))}
      </div>
      <div className="dummy-bottom bg-[black] w-full h-[10vh]"></div>
    </div>
  );
};

export default Me;
