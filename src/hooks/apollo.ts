import gql from "graphql-tag";

export const GET_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      name
    }
  }
`;

export const GET_ROCKET = gql`
  query ExampleQuery($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      description
    }
  }
`;
