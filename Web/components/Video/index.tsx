import { FC } from "react";
import { Action } from "./action";
import { Avatar } from "./Avatar";
import { ChangeFeed } from "./changeFeed";

interface IVideoProps {}
// TODO Conditionallt change the transparancy of the text
export const Video: FC<IVideoProps> = ({}) => {
  return (
    <div className="video border-[1px] border-[white] bg-[white] w-full h-full absolute snap-start top-0 bottom-0 overflow-hidden">
      <ChangeFeed />
      <div className="action-container flex flex-col justify-around items-center relative bottom-[-40vh] left-[80vw] w-[20vw] h-[40vh] z-[3]">
        <Avatar src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
        <Action text="4453">
          <svg
            width="44"
            height="41"
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_104_29)">
              <path
                d="M20.0611 35.818C21.0718 36.5395 22.4282 36.5395 23.4389 35.818C28.4905 32.2118 33.3281 28.063 36.6744 22.7538C38.3509 20.0939 39.0537 17.9429 39.3301 16.184C39.4416 15.5647 39.5 14.9257 39.5 14.2725C39.5 8.59918 35.097 4 29.6655 4C26.4197 4 23.5411 5.64254 21.75 8.17528C19.9589 5.64254 17.0803 4 13.8345 4C8.40304 4 4 8.59918 4 14.2725C4 14.9257 4.05836 15.5647 4.16994 16.184C4.44634 17.9429 5.14906 20.0939 6.82555 22.7538C10.1719 28.063 15.0095 32.2118 20.0611 35.818Z"
                fill="#FBFBFB"
              />
              <path
                d="M20.0611 31.5C21.0718 32.2216 22.4282 32.2216 23.4389 31.5C29 28.5 31 27.5 36.6744 22.7538C38.3509 20.0939 39.0537 17.9429 39.3301 16.184C39.4416 15.5647 39.5 14.9257 39.5 14.2725C39.5 8.59918 35.097 4 29.6655 4C26.4197 4 23.5411 5.64254 21.75 8.17528C19.9589 5.64254 17.0803 4 13.8345 4C8.40304 4 4 8.59918 4 14.2725C4 14.9257 4.05836 15.5647 4.16994 16.184C4.44634 17.9429 5.14906 20.0939 6.82555 22.7538C13 27.5 15 28.5 20.0611 31.5Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_104_29"
                x="0"
                y="0.33"
                width="43.5"
                height="40.3591"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.33" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_104_29"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_104_29"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Action>
        <Action text="231">
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_104_24)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.8242 33.4976C21.7164 33.4992 21.6083 33.5 21.5 33.5C11.835 33.5 4 27.0081 4 19C4 10.9919 11.835 4.5 21.5 4.5C31.165 4.5 39 10.9919 39 19C39 21.0253 38.4989 22.9536 37.5938 24.7044C36.3794 27.1797 34.5051 29.3888 32.472 31.2945C29.3743 34.1981 25.7901 36.39 23.2378 37.6253C22.5627 37.9521 21.8242 37.4404 21.8242 36.7278V33.4976ZM15.5 19.75C15.5 21.1307 14.3807 22.25 13 22.25C11.6193 22.25 10.5 21.1307 10.5 19.75C10.5 18.3693 11.6193 17.25 13 17.25C14.3807 17.25 15.5 18.3693 15.5 19.75ZM21.5 22.25C22.8807 22.25 24 21.1307 24 19.75C24 18.3693 22.8807 17.25 21.5 17.25C20.1193 17.25 19 18.3693 19 19.75C19 21.1307 20.1193 22.25 21.5 22.25ZM32.5 19.75C32.5 21.1307 31.3807 22.25 30 22.25C28.6193 22.25 27.5 21.1307 27.5 19.75C27.5 18.3693 28.6193 17.25 30 17.25C31.3807 17.25 32.5 18.3693 32.5 19.75Z"
                fill="#FBFBFB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5 33.5C31.165 33.5 39 27.0081 39 19C39 10.9919 31.165 4.5 21.5 4.5C11.835 4.5 4 10.9919 4 19C4 27.0081 11.835 33.5 21.5 33.5ZM13 22.25C14.3807 22.25 15.5 21.1307 15.5 19.75C15.5 18.3693 14.3807 17.25 13 17.25C11.6193 17.25 10.5 18.3693 10.5 19.75C10.5 21.1307 11.6193 22.25 13 22.25ZM24 19.75C24 21.1307 22.8807 22.25 21.5 22.25C20.1193 22.25 19 21.1307 19 19.75C19 18.3693 20.1193 17.25 21.5 17.25C22.8807 17.25 24 18.3693 24 19.75ZM30 22.25C31.3807 22.25 32.5 21.1307 32.5 19.75C32.5 18.3693 31.3807 17.25 30 17.25C28.6193 17.25 27.5 18.3693 27.5 19.75C27.5 21.1307 28.6193 22.25 30 22.25Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_104_24"
                x="0"
                y="0.83"
                width="43"
                height="41.2262"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.33" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_104_24"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_104_24"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Action>
        <Action text="share">
          <svg
            width="43"
            height="36"
            viewBox="0 0 43 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_104_18)">
              <path
                d="M37.9988 19.0845C38.4285 18.6965 38.4399 18.0257 38.0236 17.6233L24.7382 4.78295C24.1035 4.16949 23.0432 4.61928 23.0432 5.50199V10.8621C18.0772 10.7853 14.3463 12.0842 11.5737 14.0746C8.75779 16.0962 6.9636 18.807 5.858 21.4345C4.75341 24.0595 4.32774 26.6203 4.25995 28.3761C4.22652 29.242 4.27816 29.9566 4.40223 30.3933C4.43394 30.5048 4.47678 30.622 4.53837 30.7255C4.59258 30.8167 4.70727 30.9754 4.91565 31.0417C5.16639 31.1214 5.37921 31.0191 5.50256 30.9132C5.61389 30.8176 5.6887 30.6943 5.74047 30.5908L5.74705 30.5777L5.75234 30.5653L5.75284 30.5641L5.75411 30.5613L5.76432 30.5391C5.77418 30.518 5.79023 30.4845 5.81294 30.44C5.85837 30.3509 5.93042 30.2173 6.03287 30.049C6.23783 29.7123 6.56409 29.237 7.04199 28.6994C7.99659 27.6255 9.55921 26.2993 11.979 25.3314C13.3564 24.7805 15.6523 24.5297 17.9033 24.4891C20.0514 24.4504 22.0549 24.6041 23.0432 24.822V30.3392C23.0432 31.2058 24.0703 31.6622 24.7134 31.0814L37.9988 19.0845Z"
                fill="#FBFBFB"
              />
              <path
                d="M33.906 17.6574C34.8657 16.5418 33.906 14.9506 33.906 14.9506L32.25 12.0469L24.7382 4.78295C24.1035 4.16949 23.0432 4.61928 23.0432 5.50199V10.8621C18.0772 10.7853 14.3463 12.0842 11.5737 14.0746C8.75779 16.0962 6.9636 18.807 5.858 21.4345C4.75341 24.0595 4.32774 26.6203 4.25995 28.3761C4.22652 29.242 4.27816 29.9566 4.40223 30.3933C4.43394 30.5048 4.47678 30.622 4.53837 30.7255C4.59258 30.8167 4.70727 30.9754 4.91565 31.0417C5.16639 31.1214 5.37921 31.0191 5.50256 30.9132C5.61389 30.8176 5.6887 30.6943 5.74047 30.5908L5.74705 30.5777L5.75234 30.5653L5.75284 30.5641L5.75411 30.5613L5.76432 30.5391C5.77418 30.518 5.79023 30.4845 5.81294 30.44C5.85837 30.3509 5.93042 30.2173 6.03287 30.049C6.23783 29.7123 6.56409 29.237 7.04199 28.6994C7.99659 27.6255 13.2932 23.8672 16.2932 22.3672C18.7932 20.8672 23.0432 19.8672 23.0432 19.8672V25.8672C23.0432 26.7337 24.0703 27.1901 24.7134 26.6094L33.906 17.6574Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_104_18"
                x="0.25"
                y="0.83"
                width="42.0786"
                height="34.8412"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.33" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_104_18"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_104_18"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Action>
      </div>
      <video
        controls
        autoPlay
        muted
        className="video__player w-auto h-auto object-fill min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <source src="/videos/playing.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
