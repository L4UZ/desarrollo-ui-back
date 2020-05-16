import { gql } from 'apollo-server';

export default gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Continent {
    id: ID!
    name: String!
    regions: [Region]!
  }

  type Region {
    id: ID!
    name: String!
    imageSrc: String!
    places: [Place]!
  }

  type Place {
    id: ID!
    name: String!
    description: String!
    imagesSrc: [String]!
    activities: [Activity]!
    reviews: [Review]!
    overallScore: Float
  }

  type Activity {
    id: ID!
    name: String!
    price: Int!
  }

  type Review {
    id: ID!
    comment: String!
    score: Int!
    userEmail: String
    userFullName: String
  }
`;
