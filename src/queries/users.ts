import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: UserInput) {
    registerUser(registerInput: $registerInput) {
      id
      name
      email
      createdAt
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      name
      email
      createdAt
      token
    }
  }
`;
