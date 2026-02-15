import type { Metadata } from "next";
import { Space_Grotesk, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import PageTransitionProvider from "@/providers/PageTransitionProvider";
import GrainOverlay from "@/components/layout/GrainOverlay";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});

const barlowCondensed = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["700", "800", "900"],
	variable: "--font-condensed",
	display: "swap",
});

export const metadata: Metadata = {
	title: "NextPixel | Neo-Brutalist Digital Agency",
	description:
		"Crafting digital brutalism for the elite brands of the future.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${spaceGrotesk.variable} ${barlowCondensed.variable} font-display bg-background-light text-black overflow-x-hidden antialiased`}
			>
				<GrainOverlay />
				<PageTransitionProvider>
					<SmoothScrollProvider>{children}</SmoothScrollProvider>
				</PageTransitionProvider>
			</body>
		</html>
	);
}
