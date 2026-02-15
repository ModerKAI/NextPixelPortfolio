"use client";

import { useState } from "react";
import TransitionLink from "@/components/ui/TransitionLink";

interface NavbarProps {
	variant?: "default" | "works" | "team" | "case-study" | "studio";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	if (variant === "case-study") {
		return (
			<>
				<nav className="fixed top-0 left-0 w-full z-40 bg-background-light brutal-border-b px-4 py-4 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<TransitionLink href="/works">
							<span className="material-icons text-2xl">arrow_back</span>
						</TransitionLink>
						<TransitionLink
							href="/works"
							className="font-bold tracking-tighter text-lg uppercase"
						>
							NextPixel
						</TransitionLink>
					</div>
					<button
						className="material-icons text-3xl"
						aria-label="Menu"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? "close" : "menu"}
					</button>
				</nav>

				<div
					className={`fixed top-[60px] left-0 w-full z-50 bg-white border-b-4 border-black transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
						}`}
				>
					<div className="flex flex-col divide-y-[3px] divide-black">
						<TransitionLink
							href="/works"
							className="px-6 py-5 font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
							onClick={() => setMenuOpen(false)}
						>
							Works
						</TransitionLink>
						<TransitionLink
							href="/studio"
							className="px-6 py-5 font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
							onClick={() => setMenuOpen(false)}
						>
							Studio
						</TransitionLink>
						<TransitionLink
							href="/team"
							className="px-6 py-5 font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
							onClick={() => setMenuOpen(false)}
						>
							Team
						</TransitionLink>
					</div>
				</div>

				{menuOpen && (
					<div
						className="fixed inset-0 z-30 bg-black/30"
						onClick={() => setMenuOpen(false)}
					/>
				)}
			</>
		);
	}

	return (
		<nav className={`sticky top-0 ${variant === "team" ? "z-20" : "z-40"} bg-background-light border-b-[3px] border-black flex justify-between items-center px-4 md:px-6 py-4`}>
			<TransitionLink href="/" className="font-bold tracking-tighter text-lg md:text-xl">
				NEXTPIXEL™
			</TransitionLink>
			<div className="flex gap-3 md:gap-6 uppercase text-xs md:text-sm font-bold items-center">
				<TransitionLink
					href="/works"
					className={`hover:underline ${variant === "works" ? "text-primary" : ""}`}
				>
					Works
				</TransitionLink>
				<TransitionLink href="/studio" className={`hover:underline ${variant === "studio" ? "text-primary underline decoration-2 underline-offset-4" : ""}`}>
					Studio
				</TransitionLink>
				<TransitionLink
					href="/team"
					className={`hover:underline ${variant === "team" ? "text-primary underline decoration-2 underline-offset-4" : ""}`}
				>
					Team
				</TransitionLink>

			</div>
		</nav>
	);
}
