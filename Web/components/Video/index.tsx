import { FC } from "react";
import Video from "./video";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

interface IVideoProps {}
// TODO use ScrollTo and useRef to scroll down to the video

SwiperCore.use([Pagination]);

export const VideoIndex: FC<IVideoProps> = ({}) => {
  const sources = [
    "/videos/playing.mp4",
    "/videos/playing.mp4",
    "/videos/playing.mp4",
  ];

  return (
    <Swiper
      direction={"vertical"}
      className="mySwiper"
      pagination={{
        clickable: false,
        type: "custom",
      }}
    >
      <div
        className={`video bg-[white] w-screen h-screen relative snap-start m-[0_auto] overflow-hidden`}
      >
        <div className={`inner-container h-full w-full flex flex-col`}>
          {/* <ChangeFeed />
        <Actions /> */}
          <div className="absoulte top-[-50vh] left-0 min-h-screen min-w-screen">
            {sources.map((source) => (
              <SwiperSlide key={Math.random()}>
                <Video source={source} key={source} />
              </SwiperSlide>
            ))}
            <div className="min-h-[10vh] min-w-screen bg-[black]"></div>
          </div>
        </div>
      </div>
    </Swiper>
  );
};
