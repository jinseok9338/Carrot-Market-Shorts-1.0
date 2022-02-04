import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";
import { UserType } from "../utils/auth/AuthType";
import { ProvideAuth, useAuth } from "../utils/auth/useAuth";

import LoginPage from "./Login";
const Home: NextPage = () => {
  const auth = useAuth();
  console.log(auth?.user, "currentUser");
  return (
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
  );
};

export default Home;
