import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

import RegisterModal from "./components/Modal/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SultanBnb ",
	description: "Airbnb clone",
};

const font = Nunito({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<RegisterModal/>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
