import { gql } from "urql";

export const PURCHASE_PACKAGE = gql`
  mutation PurchasePackage(
    $args: PurchasePackageInput = { packageId: "", txnIn: "" }
  ) {
    purchasePackage(args: $args) {
      apiPublicKey
      apiSecretKey
      package {
        name
      }
    }
  }
`;
