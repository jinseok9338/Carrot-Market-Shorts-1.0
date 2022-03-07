import { FC } from "react";

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
      <span className="mt-2 ">Story</span>
      <div className="storyView-container w-full flex justify-around ">
        {images.map((image) => (
          <div className="avatar-container">
            <img className="w-[60px] h-[60px] rounded-full" src={image} />
          </div>
        ))}
      </div>
      <div>
        <span>SwipeerView</span>
      </div>
      <div className="text-center">
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
    </div>
  );
};

export default ProdcutDetail;
