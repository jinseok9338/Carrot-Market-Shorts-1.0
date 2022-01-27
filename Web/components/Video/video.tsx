// Getting rid of all the svg

interface VideoProps {
  source: string;
}
const Video = ({ source }: VideoProps) => {
  return (
    <video
      id={source}
      muted
      preload="auto"
      className={`video__player w-screen  object-cover min-w-full min-h-[91vh] scale-[1,-1] object-center`}
    >
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default Video;
