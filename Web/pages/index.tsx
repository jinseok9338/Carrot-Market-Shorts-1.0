import type { NextPage } from "next";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col items-center w-screen justify-center h-screen">
      <SwiperView />
      <Footer />
    </div>
  );
};

export default Home;
