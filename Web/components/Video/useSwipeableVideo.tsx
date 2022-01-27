import { createContext, FC, useContext, useRef, useState } from "react";

interface swipableContextType {
  videoRef?: any;
  playing: boolean;
  onVideoPress: () => void;
}

const swipableContext = createContext<swipableContextType>(
  {} as swipableContextType
);

interface VideoContextIProps {}

export const VideoContextProvider: FC<VideoContextIProps> = ({ children }) => {
  const videoRef: any = useRef(null);
  const [playing, setPlaying] = useState(true);

  const onVideoPress = () => {
    if (playing) {
      (videoRef as any).current.pause();
      setPlaying(false);
    } else {
      (videoRef as any).current.play();
      setPlaying(true);
    }
  };

  const value = {
    videoRef,
    playing,
    onVideoPress,
  };

  return (
    <swipableContext.Provider value={value}>
      {children}
    </swipableContext.Provider>
  );
};

export default function useSwipableVideo() {
  return useContext(swipableContext);
}
