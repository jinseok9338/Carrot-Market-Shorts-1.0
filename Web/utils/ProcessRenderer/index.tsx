import { FC } from "react";
import dynamic from "next/dynamic";
import ProductDetail from "../../components/ProductDetail";
import { DotLoaderCss } from "../DotLoaderCss";

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
        <div className="w-full h-full flex items-center justify-center bg-[#D5D8DC]">
          <DotLoader
            size={"150"}
            color={"#C54327"}
            loading={true}
            css={DotLoaderCss}
            speedMultiplier={1}
          />
        </div>
      ) : process == "Inbox" ? (
        <SwiperView products={products} />
      ) : (
        <Me />
      )}
    </>
  );
};

export default ProcessRenderer;

{
  /* <DotLoader
size={120}
color={"#36D7B7"}
speedMultiplier={1}
loading={true}
css=""
/> */
}
