import type { NextPage } from "next";
import Footer from "../components/Footer";
import { SwiperView } from "../components/Swipers";
import { VideoIndex } from "../components/Video";

const Home: NextPage = () => {
  return (
    <div className="container flex items-center justify center">
      <SwiperView />
      <Footer />
    </div>
  );
};

export default Home;
