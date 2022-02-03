import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";
import { ProvideAuth, useAuth } from "../utils/auth/useAuth";
import LoginPage from "./Login";

const Home: NextPage = () => {
  const auth = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    if (auth?.user) {
      setIsAuthenticated(true);
    }
  }, [auth?.user]);
  console.log(auth?.user);
  return (
    <ProvideAuth>
      <div className="home">
        {isAuthenticated ? (
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
