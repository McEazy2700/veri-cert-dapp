"use client";
import Image from "next/image";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEmailPasswordSignInMutation } from "@/graphql/graphl_generated";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import userStateAtom from "@/state/atoms/user";
import { setAuthTokens } from "@/utils/localStorage";

const formSchema = z.object({
	email: z.string().min(2, { message: "Please Enter a valid name" }),
	password: z.string().min(2, { message: "Your password is too short" }),
});
type FormSchema = z.infer<typeof formSchema>;
const SignUp = () => {
	const router = useRouter();
	const setUser = useSetAtom(userStateAtom);
	const [{ fetching }, mutate] = useEmailPasswordSignInMutation();
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
	});
	const { toast } = useToast();

	const onSubmit = async (value: FormSchema) => {
		const { error, data } = await mutate({
			args: value,
		});
		if (error?.graphQLErrors.length) {
			toast({
				title: "SignUp Error",
				description: error.graphQLErrors[0].message,
				variant: "destructive",
			});
		} else if (data?.emailPasswordSignin) {
			setAuthTokens({
				token: data.emailPasswordSignin.token,
				refreshToken: data.emailPasswordSignin.refreshToken,
			});
			setUser(data.emailPasswordSignin.user);
			router.replace("/admin");
		}
	};

	return (
		<div className="w-screen flex items-center h-screen justify-center">
			<div>
				<div className="flex flex-col items-center gap-4">
					<Image
						src="/images/veecert.png"
						width={100}
						height={100}
						alt="vericert"
					/>
					<h1>Sign In</h1>
				</div>
				<Form {...form}>
					<form
						className="flex flex-col gap-3"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="example@email.com"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											size={40}
											type="password"
											placeholder="*********"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button loading={fetching} disabled={fetching} type="submit">
							SignIn
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default SignUp;
