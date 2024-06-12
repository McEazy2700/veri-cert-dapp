import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import URQLProvider from "@/components/providers/urql";

export const metadata: Metadata = {
	title: "Veecert",
	description: "...",
};

const inter = Inter({ subsets: ["latin"] });

interface Props {
	children?: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${inter.className} dark:bg-black/80 dark:text-white`}>
				<URQLProvider>{children}</URQLProvider>
			</body>
		</html>
	);
};

export default RootLayout;
