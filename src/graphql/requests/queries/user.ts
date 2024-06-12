import { gql } from "urql";

export const USER_CLIENT = gql`
  query UserClient($userId: Int!) {
    userClient(userId: $userId) {
      clientPackage {
        id
        package {
          name
          id
          storageCapacity
        }
      }
      usedStorage
    }
  }
`;
