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
        className={`video-container bg-[white] w-screen h-screen relative m-[0_auto] overflow-hidden`}
      >
        <div className={`inner-container h-full w-full flex flex-col`}>
          {/* <ChangeFeed />
        <Actions /> */}

          {sources.map((source) => (
            <SwiperSlide className="h-full w-full" key={Math.random()}>
              <Video
                source={
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                }
                key={source}
              />
            </SwiperSlide>
          ))}
          <div className="min-h-[10vh] min-w-screen bg-[black]"></div>
        </div>
      </div>
    </Swiper>
  );
};
