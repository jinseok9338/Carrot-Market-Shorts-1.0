import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProvideAuth } from "../utils/auth/useAuth";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { ProvideProcess } from "../utils/ProcessLoader/useProcess";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ProvideAuth>
        <ProvideProcess>
          <Component {...pageProps} />
        </ProvideProcess>
      </ProvideAuth>
    </ApolloProvider>
  );
}

export default MyApp;
