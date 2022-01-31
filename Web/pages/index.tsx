import type { NextPage } from "next";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";

const Home: NextPage = () => {
  return (
    <div className="container flex items-center justify-center h-screen">
      <SwiperView />
      <Footer />
    </div>
  );
};

export default Home;
