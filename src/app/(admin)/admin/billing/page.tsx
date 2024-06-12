"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAtomValue } from "jotai";
import userStateAtom from "@/state/atoms/user";
import {
  usePackagesQuery,
  useUserClientQuery,
} from "@/graphql/graphl_generated";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PurchasePackageConfirm from "@/components/atoms/a-purchase-package-confirm";

const BillingPage = () => {
  const user = useAtomValue(userStateAtom);
  const [{ data: userPackData }] = useUserClientQuery({
    variables: { userId: user.id },
  });
  const [{ data }] = usePackagesQuery();
  const packages = data?.packages ?? [];
  const userPackage = userPackData?.userClient.clientPackage?.package;
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>
                    {userPackage ? userPackage.name : "None"}
                  </CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    <div>
                      <h3 className="flex items-center"></h3>
                      {!userPackage ? (
                        <p>You currently have no active package</p>
                      ) : (
                        <p>
                          <span>
                            {userPackage?.storageCapacity / (1024 * 1024)}MB
                          </span>{" "}
                          Storage
                        </p>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Create New Order</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {packages.map((pack) => (
                <Card
                  key={pack.id}
                  className="sm:col-span-2 space-y-6"
                  x-chunk="dashboard-05-chunk-0"
                >
                  <CardHeader className="pb-3 space-y-4">
                    <CardTitle>{pack.name}</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      <div>
                        <h3 className="flex items-center">
                          {pack.price === 0 ? (
                            <>
                              <span>Free</span>
                            </>
                          ) : (
                            <>
                              <span>{pack.price / 1_000_000}</span>
                              <Icon icon="simple-icons:algorand" />
                            </>
                          )}
                        </h3>
                        <ul className="list-disc">
                          {pack.offers.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <Icon icon="ph:dot" />
                              <li className="list-disc">{item}</li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="outline" size="sm">
                          Purchase
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <PurchasePackageConfirm pack={pack} />
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
