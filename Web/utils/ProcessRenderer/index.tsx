import { FC } from "react";
import dynamic from "next/dynamic";
import ProductDetail from "../../components/ProductDetail";

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
        <ProductDetail />
      ) : process == "Inbox" ? (
        <SwiperView products={products} />
      ) : (
        <Me />
      )}
    </>
  );
};

export default ProcessRenderer;
