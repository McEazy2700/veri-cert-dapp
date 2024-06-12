"use client";

import { Icon } from "@iconify/react";
import { ellipseAddress } from "@/utils/elliseAddress";
import { useWallet } from "@txnlab/use-wallet";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ConnectWallet = () => {
  const { providers, activeAccount } = useWallet();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl mb-8 my-4 font-semibold">Connect Wallet</h1>
      <hr />
      {providers?.map((provider) => (
        <div
          className="flex w-full items-center gap-4"
          key={provider.metadata.id}
        >
          <h4>
            <Image
              className="rounded-2xl"
              width={100}
              height={100}
              alt={`${provider.metadata.name} icon`}
              src={provider.metadata.icon}
            />
          </h4>

          <div className="flex-1 px-6 pr-8 flex flex-col gap-2">
            <span className="flex items-center gap-2">
              {provider.metadata.name}{" "}
              {provider.isActive && (
                <span className="text-blue-600">
                  <Icon icon="ph:seal-check-fill" />
                </span>
              )}
            </span>
            <div className="flex flex-col w-full gap-2">
              <div className="flex gap-2 items-center w-full justify-between">
                {provider.isConnected && (
                  <Button
                    size="sm"
                    type="button"
                    variant="destructive"
                    className="text-xs"
                    onClick={provider.disconnect}
                    disabled={!provider.isConnected}
                  >
                    Disconnect
                  </Button>
                )}
                {!provider.isConnected && (
                  <Button
                    size="sm"
                    type="button"
                    className="text-xs"
                    variant="secondary"
                    onClick={provider.connect}
                    disabled={provider.isConnected}
                  >
                    Connect
                  </Button>
                )}
                <Button
                  size="sm"
                  type="button"
                  className="text-xs"
                  variant="ghost"
                  onClick={provider.setActiveProvider}
                  disabled={!provider.isConnected || provider.isActive}
                >
                  Set Active
                </Button>
              </div>
              <div>
                {provider.isActive && provider.accounts.length && (
                  <select
                    value={activeAccount?.address}
                    onChange={(e) => provider.setActiveAccount(e.target.value)}
                  >
                    {provider.accounts.map((account) => (
                      <option key={account.address} value={account.address}>
                        {ellipseAddress(account.address, 12)}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConnectWallet;
