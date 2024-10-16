import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

import RegisterModal from "./components/Modal/RegisterModal";
import LoginModal from "./components/Modal/LoginModal";
import ToasterProvider from "./components/Provider/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SultanBnb ",
	description: "Airbnb clone",
};

const font = Nunito({
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentUser = await getCurrentUser()
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider/>
				<LoginModal/>
				<RegisterModal/>
				<Navbar currentUser={currentUser}/>
				{children}
			</body>
		</html>
	);
}
