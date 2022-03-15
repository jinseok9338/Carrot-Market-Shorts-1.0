import {
  faBars,
  faHeart,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import SwiperPhotoView from "./SwiperPhotoView";

interface IProdcutDetailProps {}

const ProdcutDetail: FC<IProdcutDetailProps> = (props) => {
  //This is the functions that gets the random Int inclusive the min and exclusive the max
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  const images = [
    `https://picsum.photos/id/${getRandomInt(3, 400)}/200/300`,
    `https://picsum.photos/id/${getRandomInt(3, 400)}/200/300`,
    `https://picsum.photos/id/${getRandomInt(3, 400)}/200/300`,
    `https://picsum.photos/id/${getRandomInt(3, 400)}/200/300`,
  ];

  return (
    <div className=" h-full w-full flex flex-col items-center">
      <div className="storyView-container w-full flex justify-around ">
        <div className="profile-container mb-2 flex items-center w-[95%] mt-2  ">
          <img
            className="w-[40px] h-[40px] rounded-full mr-4"
            src={images[0]}
          />
          <span className="text-[1.1rem] font-[800] tracking-tighter">
            Jinseok9338
          </span>
          <FontAwesomeIcon
            icon={faBars}
            className="text-[1.2rem] text-[black]/[0.7] ml-[auto]"
          />
        </div>
      </div>

      <SwiperPhotoView photos={images} />
      <div className="icons-container flex items-center w-[95%] h-[3rem]">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-[1.2rem] text-[black]/[0.7] mr-4 "
        />

        <i className="fa-solid fa-thought-bubble text-[1.2rem] text-[black]/[0.7] mr-4"></i>
        <FontAwesomeIcon
          icon={faUserFriends}
          className="text-[1.2rem] text-[black]/[0.7] mr-4"
        />
        <FontAwesomeIcon
          icon={faBars}
          className="text-[1.2rem] text-[black]/[0.7] ml-[auto] "
        />
      </div>

      <div className="text-center mt-2">
        <span>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </span>
      </div>
      <div>
        <span>Comment</span>
      </div>
      <div>
        <span>add Comment</span>
      </div>
      <div className="bg-tintBlack w-full h-[10vh]">
        <span>add Comment</span>
      </div>
    </div>
  );
};

export default ProdcutDetail;
