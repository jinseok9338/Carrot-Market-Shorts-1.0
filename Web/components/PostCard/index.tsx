import { FC, useRef, useState } from "react";
import { Content } from "./content";
import { PostCardHeader } from "./PostCardHeader";
interface IPostCardProps {
  post: any;
}
export const PostCard: FC<IPostCardProps> = ({ post }) => {
  const videoRef = useRef() as any;
  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play();
      else videoRef.current.pause();

      setRunning(!running);
    }
  };

  return (
    <div className="postcard-container w-[592px] max-w-[592px] relative pb-[25px] border-b-[0.5px] border-tintBlack/[0.12] ">
      <PostCardHeader post={post} />
      <Content
        post={post}
        running
        videoRef={videoRef}
        toggleAction={toggleAction}
      />
      <Actions>
        <Action>
          <img src="/images/heartIcon.svg"></img>
          <a>{post?.likes}</a>
        </Action>
        <Action>
          <img src="/images/bubbleIcon.svg"></img>
          <a>{post?.comments}</a>
        </Action>
        <Action>
          <img src="/images/arrowIcon.svg"></img>
          <a>{post?.replies}</a>
        </Action>
      </Actions>
    </div>
  );
};

// export const Container = styled.div`
//   width: 592px;
//   max-width: 592px;
//   position: relative;
//   padding-bottom: 25px;
//   border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
//   margin-bottom: 20px;
// `;

// export const Actions = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0 10px;
//   margin-top: 12px;
// `;

// export const Action = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 18px;
//   font-weight: 700;
//   margin-right: 25px;
//   cursor: pointer;
//   img {
//     width: 32px;
//     height: 32px;
//     margin-right: 4px;
//   }
// `;
