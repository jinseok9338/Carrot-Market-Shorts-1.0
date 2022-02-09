import type { NextPage } from "next";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import Footer from "../components/Footer";
import SwiperView from "../components/SwipeableVideo";
import { useAuth } from "../utils/auth/useAuth";
import withAuth from "../components/Auth/withAuth";
import { UserType } from "../utils/auth/AuthType";
import MainProductsPage from "./MainProducts";

interface Props {
  initialUserValue?: string;
  productsInfo?: any;
}

const Home: NextPage<Props> = () => {
  const auth = useAuth();

  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      const profile = jwt.decode(access_token);
      auth?.setUser(profile as unknown as UserType);
    }
  }, []);

  return <MainProductsPage />;
};

export default withAuth(Home);
