"use client";

import { useRef } from "react";
import GridBreakdown from "@/components/animations/GridBreakdown";

export default function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const taglineRef = useRef<HTMLParagraphElement>(null);

	return (
		<section ref={sectionRef} className="p-6 space-y-8">
			<div className="overflow-visible">
				<div ref={titleRef}>
					<h1 className="text-huge font-bold uppercase -ml-1">
						Creative
						<br />
						Agency
					</h1>
				</div>
			</div>

			<GridBreakdown
				imageSrc="/hero.png"
				alt="Liquid Metal Animation"
			/>

			<p
				ref={taglineRef}
				className="text-2xl font-medium leading-tight tracking-tight max-w-4/5"
			>
				CRAFTING DIGITAL{" "}
				<span className="text-primary underline">BRUTALISM</span> FOR THE ELITE
				BRANDS OF THE FUTURE.
			</p>
		</section>
	);
}
