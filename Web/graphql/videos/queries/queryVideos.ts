import gql from "graphql-tag";

export const queryVideos = gql`
  query Products {
    products {
      product_id
      product_name
      video
    }
  }
`;
