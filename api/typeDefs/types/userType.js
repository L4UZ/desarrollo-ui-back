import { gql } from 'apollo-server';

export const userType = gql`
  type User {
    firstName: String
    lastName: String
    email: String
  }
`;
