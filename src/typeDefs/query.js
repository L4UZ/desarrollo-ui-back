import { gql } from 'apollo-server';

export const query = gql`
  type Query {
    continents: [Continent]!
    region(id: String!): Region!
    place(id: String!): Place!
  }
`;
