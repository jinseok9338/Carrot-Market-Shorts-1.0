import { FC } from "react";
import dynamic from "next/dynamic";
import ProductDetail from "../../components/ProductDetail";

const DotLoader = dynamic(() => import("react-spinners/DotLoader"));

const SwiperView = dynamic(() => import("../../components/SwipeableVideo"));
const Me = dynamic(() => import("../../components/Me"));
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
        // <ProductDetail />

        <DotLoader
          size={120}
          color={"#36D7B7"}
          speedMultiplier={1}
          loading={true}
          css=""
        />
      ) : process == "Inbox" ? (
        <SwiperView products={products} />
      ) : (
        <Me />
      )}
    </>
  );
};

export default ProcessRenderer;
