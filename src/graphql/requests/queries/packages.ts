import { gql } from "urql";

export const PACKAGES = gql`
  query Packages {
    packages {
      id
      monthlyRequests
      name
      offers
      price
      storageCapacity
    }
  }
`;
