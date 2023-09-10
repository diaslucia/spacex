import gql from "graphql-tag";

export const GET_LOCATIONS = gql`
  query ExampleQuery {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
`;

export const GET_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      name
    }
  }
`;
