import { FC } from "react";
import Video from "./video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IVideoProps {}
// TODO use ScrollTo and useRef to scroll down to the video

SwiperCore.use([Pagination, Navigation]);

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
      navigation
      slidesPerView={1}
      pagination={{
        clickable: false,
        type: "custom",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      onReachEnd={() => {
        /*Pagination*/
      }}
    >
      {/* <ChangeFeed />
        <Actions /> */}

      {sources.map((source, i) => (
        <SwiperSlide key={i}>
          {({ isActive }) => <Video source={source} key={source} />}
        </SwiperSlide>
      ))}
      <div className="min-h-[10vh] min-w-screen bg-[black]"></div>
    </Swiper>
  );
};
