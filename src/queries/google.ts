import { gql } from '@apollo/client';

export const GOOGLE_AUTH_USER = gql`
  mutation GoogleAuth($idToken: String!) {
    googleAuth(idToken: $idToken) {
      id
      name
      email
      createdAt
    }
  }
`;
