import { FC } from "react";
interface IDotsProps {
  photos: string[];
}

export const Dots: FC<IDotsProps> = ({ photos }) => {
  return (
    <div className="dots-container flex">
      {photos.map((photo) => (
        <div className="dot rounded-full border-[3px] bg-[#f1f1f1] " />
      ))}
    </div>
  );
};

// .dot {
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     border: 3px solid #f1f1f1;
//     margin: 0 5px;
//     background: #f1f1f1;
//   }
//   .dot.active {
//     background: rgb(32, 32, 32);
//   }
