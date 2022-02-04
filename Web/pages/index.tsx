import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";

import { useAuth } from "../utils/auth/useAuth";

import LoginPage from "./Login";
import Cookie from "js-cookie";
import { parseCookies } from "../utils/parseCookies";

interface Props {
  initialUserValue?: string;
}

const Home: NextPage<Props> = ({ initialUserValue }) => {
  const auth = useAuth();

  console.log(auth?.user);

  useEffect(() => {
    if (auth?.user) {
      Cookie.set("user", JSON.stringify(auth?.user));
    }
    auth?.setUser(JSON.parse(initialUserValue as string));
    Cookie.set("user", JSON.stringify(initialUserValue));
  }, [auth?.user]);

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

Home.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  cookies.user;
  return { initialUserValue: cookies.user };
};

export default Home;
