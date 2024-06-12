import { gql } from "urql";

export const EMAIL_PASSWORD_SIGNUP = gql`
  mutation EmailPasswordSignUp(
    $args: EmailPasswordSignUpInput = { email: "", password1: "", password2: "" }
  ) {
    emailPasswordSignup(args: $args) {
      token
      refreshToken
      user {
        email
        id
      }
    }
  }
`;

export const EMAIL_PASSWORD_SIGNIN = gql`
  mutation EmailPasswordSignIn($args: EmailPasswordSignInInput!) {
    emailPasswordSignin(args: $args) {
      refreshToken
      token
      user {
        email
        id
      }
    }
  }
`;
