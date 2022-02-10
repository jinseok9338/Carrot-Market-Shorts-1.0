import type { GetStaticPropsResult, NextPage } from "next";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Footer from "../components/Footer";
import SwiperView from "../components/SwipeableVideo";
import { useAuth } from "../utils/auth/useAuth";
import withAuth from "../components/Auth/withAuth";
import { UserType } from "../utils/auth/AuthType";
import { gql } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";

interface Props {
  products: any;
}

const Home: NextPage<Props> = ({ products }) => {
  const auth = useAuth();

  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      const profile = jwt.decode(access_token);
      auth?.setUser(profile as unknown as UserType);
    }
  }, []);

  return (
    <div className="home">
      <SwiperView products={products} />
      <Footer />
    </div>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const apolloClient = initializeApollo();

  const { data, loading } = await apolloClient.query({
    query: gql`
      query Products {
        products {
          user_id
          product_id
          video
        }
      }
    `,
  });

  console.log(data.products);
  return {
    props: {
      products: data.products,
    },
  };
}

export default withAuth(Home);
