import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import { SwiperView } from "../components/SwipeableVideo";

import { useAuth } from "../utils/auth/useAuth";

import LoginPage from "./Login";
import Cookie from "js-cookie";
import { parseCookies } from "../utils/parseCookies";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import gql from "graphql-tag";
import { useQuery } from "react-query";
import {
  ProductsDocument,
  ProductsQuery,
  useProductsQuery,
} from "../graphql/generated";

interface Props {
  initialUserValue?: string;
}

const Home: NextPage<Props> = ({ initialUserValue }) => {
  const auth = useAuth();
  const { data } = useQuery<ProductsQuery>(ProductsDocument);
  console.log(data);

  useEffect(() => {
    if (auth?.user) {
      Cookie.set("user", JSON.stringify(auth?.user), { expires: 1 });
    }
    if (initialUserValue) {
      auth?.setUser(JSON.parse(initialUserValue as string));
      Cookie.set("user", JSON.stringify(initialUserValue), { expires: 1 });
    }
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default Home;
