import gql from "graphql-tag";

export default gql`
  type Product {
    id: ID
    title: String
    price: Int
    description: String
  }
`;
