import type { NextPage } from "next";
import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";
import { ProvideAuth, useAuth } from "../utils/auth/useAuth";
import LoginPage from "./Login";

const Home: NextPage = () => {
  const auth = useAuth();
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
