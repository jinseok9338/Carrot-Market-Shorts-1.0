import {
  faBars,
  faHeartBroken,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import SwiperPhotoView from "./SwiperPhotoView";
import { faHeart, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { IoChatbubbleOutline, IoHeartOutline } from "react-icons/io5";
import { FaRegBookmark, FaPaperPlane } from "react-icons/fa";

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

  const comments = [
    { username: "kindly", msg: "this is comment" },
    { username: "kindly2", msg: "this is comment1" },
    { username: "kindly11", msg: "this is comment2" },
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
        <IoHeartOutline className="text-[1.5rem] text-[black]/[0.7] mr-4 " />
        <IoChatbubbleOutline className="text-[1.4rem] text-[black]/[0.7] mr-4" />

        <FaRegBookmark className="text-[1.2rem] text-[black]/[0.7] ml-[auto] " />
      </div>
      <div className="w-[95%]">
        <span className="font-[600]">Interested</span>
        <span className="ml-2 font-[600]">23</span>
      </div>

      <div className="text-left mt-2 w-[95%]">
        <span className="font-[600] mr-2">Jinseok9338</span>
        <span>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries ....
        </span>
        <span className="ml-2 text-[black]/[0.7] text-[0.8rem] cursor-pointer">
          See More
        </span>
      </div>
      <div className="flex flex-col w-[95%] mb-2">
        {comments &&
          comments.map((comment) => (
            <div>
              <span className="text-[black] text-[0.8rem] cursor-pointer font-[800]">
                {comment.username}
              </span>
              <span className="ml-2 text-[black] text-[0.8rem]">
                {comment.msg}
              </span>
            </div>
          ))}
      </div>
      <div className="w-full flex relative">
        <input
          placeholder="Write a comment"
          className="focus:ring-[indigo] focus:border-[indigo] block w-full pl-2 h-[4vh] pr-12 sm:text-sm border-gray-300 rounded-md text-[0.9rem]"
        />
        <button className="absolute right-2 h-full">
          <FaPaperPlane className="text-[1.2rem] text-[black]/[0.7]" />
        </button>
      </div>
      <div className="bg-tintBlack w-full h-[10vh]" />
    </div>
  );
};

export default ProdcutDetail;
