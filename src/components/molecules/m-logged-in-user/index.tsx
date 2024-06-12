"use client";

import ConnectWallet from "@/components/atoms/a-connect-wallet";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import userStateAtom from "@/state/atoms/user";
import { ellipseAddress } from "@/utils/elliseAddress";
import { useWallet } from "@txnlab/use-wallet";
import { useAtomValue } from "jotai";
import React from "react";

const LoggedInUser: React.FC = () => {
  const { activeAddress } = useWallet();
  const user = useAtomValue(userStateAtom);
  return (
    <div className="w-full flex items-center justify-between">
      <div>Hello</div>
      <div className="flex items-center gap-4">
        <address>{user?.email}</address>
        <Dialog>
          <DialogTrigger>
            <Button variant={activeAddress ? "outline" : "default"}>
              {activeAddress ? ellipseAddress(activeAddress) : "Connect Wallet"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ConnectWallet />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LoggedInUser;
