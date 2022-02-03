import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";
import { ProvideAuth, useAuth } from "../utils/auth/useAuth";
import LoginPage from "./Login";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  // const loading = status === "loading";

  return (
    <ProvideAuth>
      <div className="home">
        {status === "authenticated" ? (
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
