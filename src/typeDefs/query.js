import { gql } from 'apollo-server';

export const query = gql`
  type Query {
    users: [User]
    continents: [Continent]
    regions: [Region]
  }
`;
