import type { NextPage } from "next";
import Layout from "../components/LayOut";
import { Video } from "../components/Video";

const Home: NextPage = () => {
  return (
    <Layout>
      <Video />
    </Layout>
  );
};

export default Home;
