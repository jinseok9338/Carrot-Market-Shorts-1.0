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
  // videos not playing becuase of the internet speed... What the fuck??

  return (
    <Swiper
      direction={"vertical"}
      className="mySwiper video-container bg-[white] w-screen h-auto relative m-[0_auto] overflow-hidden"
      pagination={{
        clickable: false,
        type: "custom",
      }}
    >
      {/* <ChangeFeed />
        <Actions /> */}

      {sources.map((source, i) => (
        <SwiperSlide key={i}>
          <Video source={source} key={source} />
        </SwiperSlide>
      ))}
      <div className="min-h-[10vh] min-w-screen bg-[black]"></div>
    </Swiper>
  );
};
