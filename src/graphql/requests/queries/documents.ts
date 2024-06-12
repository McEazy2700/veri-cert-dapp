import { gql } from "urql";

export const DOCUMENTS = gql`
  query Documents($args: DocumentFilterNoneTypeListOptions = {}) {
    documents(args: $args) {
      assetId
      name
      visibility
      ipfsAsset {
        pinSize
        ipfsHash
        timestamp
      }
    }
  }
`;
