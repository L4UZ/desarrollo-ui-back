import { gql } from 'apollo-server';

export const mutation = gql`
  type Mutation {
    signUp(user: SignUpInput!): String!
    signIn(credentials: CredentialsInput!): String!
    addReview(review: ReviewInput!): Review!
    addTrip(trip: TripInput!): Trip!
    addPlaceToTrip(tripPlace: TripPlaceInput!): Trip!
  }

  input CredentialsInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input ReviewInput {
    token: String!
    comment: String!
    score: Int!
    placeId: String!
  }

  input TripInput {
    token: String!
    name: String!
  }

  input TripPlaceInput {
    token: String!
    tripId: String!
    placeId: String!
  }
`;
