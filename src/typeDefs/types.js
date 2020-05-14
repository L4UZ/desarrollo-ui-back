import { gql } from 'apollo-server';

export default gql`
  type User {
    firstName: String
    lastName: String
    email: String
  }

  type Continent {
    name: String
    regions: [Region]
  }

  type Region {
    name: String
    imageSrc: String
    placeIds: [String]
  }
`;
