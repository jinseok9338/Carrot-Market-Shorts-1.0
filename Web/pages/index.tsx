import type { GetStaticPropsResult, NextPage } from "next";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Footer from "../components/Footer";
import { useAuth } from "../utils/auth/useAuth";
import withAuth from "../components/Auth/withAuth";
import { UserType } from "../utils/auth/AuthType";
import { gql } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import { useProcess } from "../utils/ProcessLoader/useProcess";
import dynamic from "next/dynamic";
import ProcessRenderer from "../utils/ProcessRenderer";

const SwiperView = dynamic(() => import("../components/SwipeableVideo"));

interface Props {
  products: any;
}

const Home: NextPage<Props> = ({ products }) => {
  const auth = useAuth();
  const process = useProcess();

  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      const profile = jwt.decode(access_token);
      auth?.setUser(profile as unknown as UserType);
    }
  }, []);

  return (
    <div className="home">
      <ProcessRenderer process={process?.process} products={products} />
      <Footer setProcess={process?.setProcess} process={process?.process} />
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
