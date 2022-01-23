import type { NextPage } from "next";
import Footer from "../components/Footer";
import Layout from "../components/LayOut";
import { Video } from "../components/Video";

const Home: NextPage = () => {
  return (
    <Layout>
      <Video />
      <Footer />
    </Layout>
  );
};

export default Home;
