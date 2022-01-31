import type { NextPage } from "next";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";

const Home: NextPage = () => {
  return (
    <div className="home">
      <SwiperView />
      <Footer />
    </div>
  );
};

export default Home;
