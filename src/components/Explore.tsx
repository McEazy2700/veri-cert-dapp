"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export function Explore() {
  return (
    <div
      id="explore"
      className=" flex min-h-screen w-full flex-col bg-muted/40"
    >
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Laser Lemonade Machine
                        </TableCell>
                        <TableCell className="font-bold">5.4MB</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Hypernova Headphones
                        </TableCell>
                        <TableCell className="font-bold">5.4MB</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          AeroGlow Desk Lamp
                        </TableCell>
                        <TableCell className="font-bold">5.4MB</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-11-29 08:15 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell href="/document" className="font-medium">
                          TechTonic Energy Drink
                        </TableCell>
                        <TableCell className="font-bold">5.4MB</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-12-25 11:59 PM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Gamer Gear Pro Controller
                        </TableCell>
                        <TableCell className="font-bold">5.4MB</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-01-01 12:00 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Luminous VR Headset
                        </TableCell>
                        <TableCell className="font-bold">5.4MB</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-02-14 02:14 PM
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
