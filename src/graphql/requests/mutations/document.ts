import { gql } from "urql";

export const UPLOAD_DOCUMENT = gql`
  mutation UploadDocuent(
    $args: NewDocumentInput = { name: "", file: "", visibility: PUBLIC, authorizedEmail: "" }
  ) {
    uploadDocument(args: $args) {
      assetId
      authorisedEmail
      name
      visibility
      nftIpfsAsset {
        ipfsHash
      }
      ipfsAsset {
        ipfsHash
      }
    }
  }
`;
