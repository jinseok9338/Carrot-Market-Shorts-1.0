import type { NextPage } from "next";
import Footer from "../components/Footer";
import { VideoIndex } from "../components/Video";

const Home: NextPage = () => {
  return (
    <div className="container">
      <VideoIndex />
      <Footer />
    </div>
  );
};

export default Home;
