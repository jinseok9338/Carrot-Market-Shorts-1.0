import gql from "graphql-tag";
import { GetStaticPropsResult, InferGetStaticPropsType, NextPage } from "next";
import { FC } from "react";
import Footer from "../../components/Footer";
import SwiperView from "../../components/SwipeableVideo";
import { initializeApollo } from "../../lib/apolloClient";
import { GetStaticProps, GetStaticPropsContext } from "next";

interface IMainProductsPageProps {
  products: any;
}

const MainProductsPage: React.FC<IMainProductsPageProps> = ({ products }) => {
  return (
    <div className="home">
      <SwiperView products={products} />
      <Footer />
    </div>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IMainProductsPageProps>
> {
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

export default MainProductsPage;
