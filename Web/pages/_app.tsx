import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProvideAuth } from "../utils/auth/useAuth";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
