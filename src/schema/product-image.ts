import gql from "graphql-tag";

export default gql`
  type ProductImage {
    id: ID
    url: String
    position: Int
  }
`;
