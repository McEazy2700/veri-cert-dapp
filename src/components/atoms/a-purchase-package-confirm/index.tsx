"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  PackagesQuery,
  usePurchasePackageMutation,
} from "@/graphql/graphl_generated";
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
  const client = new algosdk.Algodv2(
    "",
    "https://testnet-api.algonode.cloud",
    "",
  );

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
    // const config = getAlgodConfigFromViteEnvironment();
    if (pack.price === 0) {
      const { error, data } = await mutate({
        args: {
          txnIn: "",
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
      return;
    }
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
    const waitRounds = 8;
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
      <Card>
        <CardHeader>
          <CardTitle>Confirmation</CardTitle>
          <CardDescription>
            You are about to purchase the <span>{pack.name}</span> package for
          </CardDescription>
          <p className="text-xl font-semibold">
            {pack.price === 0 ? (
              "Free"
            ) : (
              <span className="flex items-center">
                {pack.price / 1_000_000}
                <Icon icon="simple-icons:algorand" />
              </span>
            )}
          </p>
        </CardHeader>
        <CardFooter>
          <Button
            className="w-full max-w-[180px]"
            onClick={handlePurchase}
            loading={fetching || transactionInProgress}
            disabled={fetching || transactionInProgress}
          >
            Yes Proceed
          </Button>
        </CardFooter>
      </Card>
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
