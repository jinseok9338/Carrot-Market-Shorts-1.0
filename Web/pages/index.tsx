import type { NextPage } from "next";
import Footer from "../components/Footer";
import Layout from "../components/LayOut";
import { VideoIndex } from "../components/Video";

const Home: NextPage = () => {
  return (
    <Layout>
      <VideoIndex />
      <Footer />
    </Layout>
  );
};

export default Home;
