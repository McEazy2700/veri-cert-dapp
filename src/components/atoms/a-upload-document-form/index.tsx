"use client";
import { Input } from "@/components/ui/input";
import { DocumentVisibilityType, useUploadDocuentMutation } from "@/graphql/graphl_generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter a valid name" }),
  file: z.instanceof(File, { message: "Please provide a valid file" }),
});

type FormSchema = z.infer<typeof formSchema>;
const UploadDocumentForm = () => {
  const [{ fetching }, mutate] = useUploadDocuentMutation();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  const onSubmit = async (value: FormSchema) => {
    const { error, data } = await mutate({
      args: {
        name: value.name,
        file: value.file,
        visibility: DocumentVisibilityType.Public,
        authorizedEmail: [],
      },
    });
    if (error?.graphQLErrors.length) {
      toast({
        title: "Upload Error",
        description: error.graphQLErrors[0].message,
        variant: "destructive",
      });
    } else if (data?.uploadDocument) {
      toast({
        title: "Upload Success",
        description: `${data.uploadDocument.name} has been uploaded`,
      });
    }
  };
  return (
    <div
      className="relative hidden flex-col items-start gap-8 md:flex"
      x-chunk="dashboard-03-chunk-0"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Document</legend>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name of document" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      placeholder="Upload Document"
                      name={field.name}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                      onChange={(e) =>
                        e.currentTarget.files && field.onChange(e.currentTarget?.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button loading={fetching} disabled={fetching} type="submit">
              Upload
            </Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default UploadDocumentForm;
