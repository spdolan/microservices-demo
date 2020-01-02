import {gql} from "apollo-server"
const typeDefs = gql`
  type Listing {
    description: String!
    id: ID!
    title: String!
  }

  type User {
    email: String!
    id: ID!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }
`;

export default typeDefs;