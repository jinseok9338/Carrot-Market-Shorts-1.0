import type { NextPage } from "next";

import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";

import LoginPage from "./Login";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  // const loading = status === "loading";

  return (
    <div className="home">
      {false ? (
        <>
          <SwiperView />
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Home;
