import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Union: { input: any; output: any; }
  Upload: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AuthTokenType = {
  __typename?: 'AuthTokenType';
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: UserType;
};

export type ClientPackageType = {
  __typename?: 'ClientPackageType';
  apiPublicKey: Scalars['String']['output'];
  apiSecretKey: Scalars['String']['output'];
  client: ClientType;
  hasPendingPayment: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  package: PackageType;
  txnId?: Maybe<Scalars['String']['output']>;
};

export type ClientType = {
  __typename?: 'ClientType';
  clientPackage?: Maybe<ClientPackageType>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  usedStorage: Scalars['Int']['output'];
  user: UserType;
};

export type DocumentFilter = {
  assetId?: InputMaybe<Scalars['Union']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<DocumentVisibilityType>;
};

export type DocumentFilterNoneTypeListOptions = {
  filter?: InputMaybe<DocumentFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ordering?: InputMaybe<Scalars['Void']['input']>;
};

export type DocumentType = {
  __typename?: 'DocumentType';
  assetId: Scalars['Union']['output'];
  authorisedEmail?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Union']['output'];
  ipfsAsset: IpfsAssetType;
  name: Scalars['String']['output'];
  nftIpfsAsset?: Maybe<IpfsAssetType>;
  visibility: DocumentVisibilityType;
};

export enum DocumentVisibilityType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type EmailPasswordSignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type EmailPasswordSignUpInput = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};

export type IpfsAssetType = {
  __typename?: 'IPFSAssetType';
  client?: Maybe<ClientType>;
  document?: Maybe<DocumentType>;
  id: Scalars['Union']['output'];
  ipfsHash: Scalars['String']['output'];
  isDuplicate: Scalars['Boolean']['output'];
  pinSize: Scalars['Union']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  emailPasswordSignin: AuthTokenType;
  emailPasswordSignup: AuthTokenType;
  newPackage: PackageType;
  purchasePackage: ClientPackageType;
  txnInfo: Scalars['Boolean']['output'];
  uploadDocument: DocumentType;
};


export type MutationEmailPasswordSigninArgs = {
  args: EmailPasswordSignInInput;
};


export type MutationEmailPasswordSignupArgs = {
  args: EmailPasswordSignUpInput;
};


export type MutationNewPackageArgs = {
  args: NewPackageInput;
  superSecretPhrase?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPurchasePackageArgs = {
  args: PurchasePackageInput;
};


export type MutationTxnInfoArgs = {
  txnId: Scalars['String']['input'];
};


export type MutationUploadDocumentArgs = {
  args: NewDocumentInput;
};

export type NewDocumentInput = {
  authorizedEmail: Array<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  visibility: DocumentVisibilityType;
};

export type NewPackageInput = {
  monthlyRequests: Scalars['Union']['input'];
  name: Scalars['String']['input'];
  offers: Array<Scalars['String']['input']>;
  price: Scalars['Union']['input'];
  storageCapacity: Scalars['Union']['input'];
};

export type PackageType = {
  __typename?: 'PackageType';
  id: Scalars['Union']['output'];
  monthlyRequests: Scalars['Union']['output'];
  name: Scalars['String']['output'];
  offers: Array<Scalars['String']['output']>;
  price: Scalars['Union']['output'];
  storageCapacity: Scalars['Union']['output'];
};

export type PurchasePackageInput = {
  packageId: Scalars['Union']['input'];
  txnIn: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  documents: Array<DocumentType>;
  packages: Array<PackageType>;
  userClient: ClientType;
  version: Scalars['String']['output'];
};


export type QueryDocumentsArgs = {
  args?: InputMaybe<DocumentFilterNoneTypeListOptions>;
};


export type QueryUserClientArgs = {
  userId: Scalars['Int']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  client: ClientType;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type EmailPasswordSignUpMutationVariables = Exact<{
  args?: InputMaybe<EmailPasswordSignUpInput>;
}>;


export type EmailPasswordSignUpMutation = { __typename?: 'Mutation', emailPasswordSignup: { __typename?: 'AuthTokenType', token: string, refreshToken: string, user: { __typename?: 'UserType', email: string, id: number } } };

export type EmailPasswordSignInMutationVariables = Exact<{
  args: EmailPasswordSignInInput;
}>;


export type EmailPasswordSignInMutation = { __typename?: 'Mutation', emailPasswordSignin: { __typename?: 'AuthTokenType', refreshToken: string, token: string, user: { __typename?: 'UserType', email: string, id: number } } };

export type UploadDocuentMutationVariables = Exact<{
  args?: InputMaybe<NewDocumentInput>;
}>;


export type UploadDocuentMutation = { __typename?: 'Mutation', uploadDocument: { __typename?: 'DocumentType', assetId: any, authorisedEmail?: Array<string> | null, name: string, visibility: DocumentVisibilityType, nftIpfsAsset?: { __typename?: 'IPFSAssetType', ipfsHash: string } | null, ipfsAsset: { __typename?: 'IPFSAssetType', ipfsHash: string } } };

export type PurchasePackageMutationVariables = Exact<{
  args?: InputMaybe<PurchasePackageInput>;
}>;


export type PurchasePackageMutation = { __typename?: 'Mutation', purchasePackage: { __typename?: 'ClientPackageType', apiPublicKey: string, apiSecretKey: string, package: { __typename?: 'PackageType', name: string } } };

export type DocumentsQueryVariables = Exact<{
  args?: InputMaybe<DocumentFilterNoneTypeListOptions>;
}>;


export type DocumentsQuery = { __typename?: 'Query', documents: Array<{ __typename?: 'DocumentType', assetId: any, name: string, visibility: DocumentVisibilityType, ipfsAsset: { __typename?: 'IPFSAssetType', pinSize: any, ipfsHash: string, timestamp: any } }> };

export type PackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PackagesQuery = { __typename?: 'Query', packages: Array<{ __typename?: 'PackageType', id: any, monthlyRequests: any, name: string, offers: Array<string>, price: any, storageCapacity: any }> };


export const EmailPasswordSignUpDocument = gql`
    mutation EmailPasswordSignUp($args: EmailPasswordSignUpInput = {email: "", password1: "", password2: ""}) {
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

export function useEmailPasswordSignUpMutation() {
  return Urql.useMutation<EmailPasswordSignUpMutation, EmailPasswordSignUpMutationVariables>(EmailPasswordSignUpDocument);
};
export const EmailPasswordSignInDocument = gql`
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

export function useEmailPasswordSignInMutation() {
  return Urql.useMutation<EmailPasswordSignInMutation, EmailPasswordSignInMutationVariables>(EmailPasswordSignInDocument);
};
export const UploadDocuentDocument = gql`
    mutation UploadDocuent($args: NewDocumentInput = {name: "", file: "", visibility: PUBLIC, authorizedEmail: ""}) {
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

export function useUploadDocuentMutation() {
  return Urql.useMutation<UploadDocuentMutation, UploadDocuentMutationVariables>(UploadDocuentDocument);
};
export const PurchasePackageDocument = gql`
    mutation PurchasePackage($args: PurchasePackageInput = {packageId: "", txnIn: ""}) {
  purchasePackage(args: $args) {
    apiPublicKey
    apiSecretKey
    package {
      name
    }
  }
}
    `;

export function usePurchasePackageMutation() {
  return Urql.useMutation<PurchasePackageMutation, PurchasePackageMutationVariables>(PurchasePackageDocument);
};
export const DocumentsDocument = gql`
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

export function useDocumentsQuery(options?: Omit<Urql.UseQueryArgs<DocumentsQueryVariables>, 'query'>) {
  return Urql.useQuery<DocumentsQuery, DocumentsQueryVariables>({ query: DocumentsDocument, ...options });
};
export const PackagesDocument = gql`
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

export function usePackagesQuery(options?: Omit<Urql.UseQueryArgs<PackagesQueryVariables>, 'query'>) {
  return Urql.useQuery<PackagesQuery, PackagesQueryVariables>({ query: PackagesDocument, ...options });
};