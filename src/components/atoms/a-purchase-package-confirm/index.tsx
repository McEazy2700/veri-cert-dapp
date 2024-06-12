"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  PackagesQuery,
  usePurchasePackageMutation,
} from "@/graphql/graphl_generated";
import { getAlgodConfigFromViteEnvironment } from "@/utils/network/getAlgoClientConfigs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DialogContent } from "@radix-ui/react-dialog";
import { useWallet } from "@txnlab/use-wallet";
import algosdk from "algosdk";
import React from "react";

interface Props {
  pack: PackagesQuery["packages"][number];
}

const PurchasePackageConfirm: React.FC<Props> = ({ pack }) => {
  const { activeAddress, sendTransactions, signTransactions } = useWallet();
  const [transactionInProgress, setTransactionInProgress] =
    React.useState(false);
  const [{ fetching }, mutate] = usePurchasePackageMutation();
  const [keys, setKeys] = React.useState<{ public: string; secret: string }>();
  const { toast } = useToast();

  const encoder = new TextEncoder();
  const handlePurchase = async () => {
    if (!activeAddress) {
      toast({
        title: "Purchase Error",
        description: "Please Connect wallet to continue",
        variant: "destructive",
      });
      return;
    }
    setTransactionInProgress(true);
    const config = getAlgodConfigFromViteEnvironment();
    const client = new algosdk.Algodv2(
      config.server,
      config.token.toString(),
      config.port,
    );

    const params = await client.getTransactionParams().do();
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      to: process.env.NEXT_PUBLIC_CONTRACT_APPLICATION_ADDRESS ?? "",
      from: activeAddress,
      amount: pack.price,
      suggestedParams: params,
      note: encoder.encode(`Purchase Veecert Package ${pack.id}`),
    });
    const encodedTxn = algosdk.encodeUnsignedTransaction(txn);
    const signedTxn = await signTransactions([encodedTxn]);
    const waitRounds = 4;
    const { id } = await sendTransactions(signedTxn, waitRounds);
    setTransactionInProgress(false);
    const { error, data } = await mutate({
      args: {
        txnIn: id,
        packageId: pack.id,
      },
    });
    if (error?.graphQLErrors.length) {
      toast({
        title: "SignUp Error",
        description: error.graphQLErrors[0].message,
        variant: "destructive",
      });
    } else if (data?.purchasePackage) {
      setKeys({
        public: data.purchasePackage.apiPublicKey,
        secret: data.purchasePackage.apiSecretKey,
      });
      toast({
        title: "Purchase Successfull",
        description: `You are not on the ${data.purchasePackage.package.name} package`,
      });
    }
  };
  return (
    <React.Fragment>
      <div>
        <h4>Confirmation</h4>
        <p>
          You are about to purchase the <span>{pack.name}</span> package for
        </p>
        <p>
          {pack.price === 0 ? (
            "Free"
          ) : (
            <span className="flex items-center">
              {pack.price / 1_000_000}
              <Icon icon="simple-icons:algorand" />
            </span>
          )}
        </p>
        <Button
          loading={fetching || transactionInProgress}
          disabled={fetching || transactionInProgress}
        >
          Yes Proceed
        </Button>
      </div>
      <Dialog open={!fetching && keys !== undefined}>
        <DialogContent>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Please Copy your API Keys</h1>
            <hr />
            <div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold">Public Key</span>
                <code>{keys?.public}</code>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold">Secret Key</span>
                <code>{keys?.secret}</code>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default PurchasePackageConfirm;
