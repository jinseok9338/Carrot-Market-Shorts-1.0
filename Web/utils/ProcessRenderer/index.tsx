import { FC } from "react";
import dynamic from "next/dynamic";

const SwiperView = dynamic(() => import("../../components/SwipeableVideo"));

interface IProcessRendererProps {
  process?: string;
  products: any;
}
// Render Different component based on the process
const ProcessRenderer: FC<IProcessRendererProps> = ({ process, products }) => {
  return (
    <>
      {process == "Home" ? (
        <SwiperView products={products} />
      ) : process == "Discover" ? (
        <SwiperView products={products} />
      ) : process == "Inbox" ? (
        <SwiperView products={products} />
      ) : (
        <SwiperView products={products} />
      )}
    </>
  );
};

export default ProcessRenderer;
