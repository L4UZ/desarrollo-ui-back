import { gql } from 'apollo-server';

export default gql`
  type User {
    firstName: String
    lastName: String
    email: String
  }

  type Continent {
    name: String
  }
`;
