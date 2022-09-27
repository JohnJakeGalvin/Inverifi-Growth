import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: String!) {
    User(id: $id) {
      id
      username
      profileimage {
        downloadUrl
      }
      memberOfOrganisationConnection {
        edges {
          node {
            id
            appConnection {
              edges {
                node {
                  id
                  machine_name
                }
              }
            }
          }
        }
      }
    }
  }
`;
