"use client";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import {
  PROVIDER_ID,
  WalletProvider as TWalletProvider,
  useInitializeProviders,
} from "@txnlab/use-wallet";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const WalletProvider: React.FC<Props> = ({ children }) => {
  const providers = useInitializeProviders({
    providers: [
      { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
      { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
      { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    ],
  });
  return <TWalletProvider value={providers}>{children}</TWalletProvider>;
};


export default WalletProvider
