import type { NextPage } from "next";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";
import LoginPage from "./Login";

const Home: NextPage = () => {
  return (
    <div className="home">
      {true ? (
        <LoginPage />
      ) : (
        <>
          <SwiperView />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
