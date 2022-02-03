import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";
import { ProvideAuth, useAuth } from "../utils/auth/useAuth";
import LoginPage from "./Login";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const auth = useAuth();

  // const { data: session, status } = useSession();
  // const loading = status === "loading";

  console.log(auth?.user);
  return (
    <ProvideAuth>
      <div className="home">
        {auth?.user ? (
          <>
            <SwiperView />
            <Footer />
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    </ProvideAuth>
  );
};

export default Home;
