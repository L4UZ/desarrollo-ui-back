import { gql } from 'apollo-server';

export const mutation = gql`
  type Mutation {
    signUp(user: SignUpInput): String
    signIn(credentials: CredentialsInput): String
  }

  input CredentialsInput {
    email: String
    password: String
  }

  input SignUpInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }
`;
