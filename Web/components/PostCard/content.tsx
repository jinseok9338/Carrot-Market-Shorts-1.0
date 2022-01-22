import { FC } from "react";
interface IContentProps {
  post: any;
  videoRef: any;
}

export const Content: FC<IContentProps> = ({ post, videoRef }) => {
  return (
    <div className="ml-[68px]">
      <div className="song flex items-end mt-[5px]">
        <img
          className="w-[18px] h-[25px] mr-[5px]"
          src="/images/songIcon.svg"
        ></img>
        <a className="font-[600] cursor-pointer underline hover:decoration-1">
          {post?.songName}
        </a>
      </div>
      <VideoContainer>
        <Video
          ref={videoRef}
          src={post?.videoUrl}
          webkit-playsinline="true"
          playsinline=""
          loop="true"
          preload="metadata"
        ></Video>
        <ActionsContainer onClick={toggleAction}>
          <PlayerIcon
            src={running ? "/images/pauseIcon.svg" : "/images/playIcon.svg"}
          ></PlayerIcon>
        </ActionsContainer>
      </VideoContainer>
    </div>
  );
};

// export const Song = styled.div`
//   display: flex;
//   align-items: flex-end;
//   margin-top: 5px;
//   a {
//     font-weight: 600;
//     cursor: pointer;
//     :hover {
//       text-decoration: underline;
//     }
//   }
//   img {
//     width: 18px;
//     height: 25px;
//     margin-right: 5px;
//   }
// `;

// export const Content = styled.div`
//   margin-left: 68px;
// `;

// export const ActionsContainer = styled.div`
//   visibility: hidden;
//   width: 40px;
//   height: 40px;
//   bottom: 15px;
//   left: 12px;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const VideoContainer = styled.div`
//   cursor: pointer;
//   width: calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100));
//   position: relative;
//   margin-top: 15px;
//   :hover {
//     ${ActionsContainer} {
//       visibility: visible;
//     }
//   }
// `;
// export const Video = styled.video`
//   max-width: 100%;
//   border-radius: 9px;
// `;

// export const PlayerIcon = styled.img`
//   width: 20px;
//   height: 20px;
// `;
