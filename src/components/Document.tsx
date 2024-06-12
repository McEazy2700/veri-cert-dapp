"use client";

import { Search, Share } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import UploadDocumentForm from "./atoms/a-upload-document-form";
import { DocumentsQueryVariables, useDocumentsQuery } from "@/graphql/graphl_generated";
import React from "react";

export function Document() {
  const [searchSting, setSearchString] = React.useState<string>();
  const opts = React.useMemo(() => {
    const opts: DocumentsQueryVariables = {
      args: {
        filter: {
          assetId: searchSting,
        },
      },
    };
    return opts;
  }, [searchSting]);

  const [{ data }] = useDocumentsQuery({ variables: opts });
  const docs = data?.documents ?? [];
  return (
    <div id="document" className="grid h-screen w-full pl-[56px]">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  value={searchSting}
                  onChange={(e) => setSearchString(e.currentTarget.value)}
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          <Dialog>
            <DialogTrigger>
              <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
                <Share className="size-3.5" />
                New
              </Button>
            </DialogTrigger>
            <DialogContent>
              <UploadDocumentForm />
            </DialogContent>
          </Dialog>
        </header>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Documents</CardTitle>
            <CardDescription>Your Uploaded Documents</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden sm:table-cell">Name</TableHead>
                  <TableHead className="hidden sm:table-cell">Visibility</TableHead>
                  <TableHead className="hidden md:table-cell">Size</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {docs.map((item) => (
                  <TableRow key={item.assetId} className="bg-accent">
                    <TableCell className="hidden sm:table-cell">{item.name}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        {item.visibility}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {item.ipfsAsset.pinSize / 1024}MB
                    </TableCell>
                    <TableCell className="text-right">
                      {new Date(item.ipfsAsset.timestamp).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {docs.length === 0 && (
              <div className="flex items-center justify-center p-4 py-8">
                <p> You currenlty have no uploaded documents</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Document;
