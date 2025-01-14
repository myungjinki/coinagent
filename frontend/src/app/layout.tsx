import { Poppins } from "next/font/google";

import ToastMessageContainer from "@/components/common/ToastMessage/ToastMessageContainer";
import Layout from "@/components/layout/Layout";

import Providers from "../providers";

import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Coin Agent",
	description: "Coin Agent",
};

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className}>
			<body suppressHydrationWarning>
				<Providers>
					<Layout>{children}</Layout>
					<ToastMessageContainer />
					<div id="root-modal"></div>
				</Providers>
			</body>
		</html>
	);
}
