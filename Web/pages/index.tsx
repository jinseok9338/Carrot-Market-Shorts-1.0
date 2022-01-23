import type { NextPage } from "next";
import Button from "../components/Button";
import Feed from "../components/Feed";
import Layout from "../components/LayOut";
import { Suggestions } from "../components/Suggestions";
import { items, people, posts } from "../mockData/data";

const Home: NextPage = () => {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      {/* <Suggestions people={people} items={items}></Suggestions> */}
    </Layout>
  );
};

export default Home;
