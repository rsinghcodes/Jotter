import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: UserInput) {
    registerUser(registerInput: $registerInput) {
      id
      name
      email
      createdAt
    }
  }
`;
