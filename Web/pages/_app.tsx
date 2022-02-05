import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProvideAuth } from "../utils/auth/useAuth";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ApolloProvider>
  );
}

export default MyApp;
