import { gql } from 'apollo-server';

export const query = gql`
  type Query {
    continents: [Continent]
    regions: [Region]
    region(id: String!): Region
    places: [Place]
  }
`;
