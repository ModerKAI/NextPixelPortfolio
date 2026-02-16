"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoAnimation() {
	const containerRef = useRef<HTMLDivElement>(null);
	const linesRef = useRef<(HTMLDivElement | null)[]>([]);
	const t = useTranslations("manifesto");

	useEffect(() => {
		const ctx = gsap.context(() => {
			const lines = linesRef.current.filter(Boolean);

			if (lines.length === 0) return;

			lines.forEach((line, i) => {
				const xStart = i % 2 === 0 ? -100 : 100;

				gsap.fromTo(
					line,
					{
						xPercent: xStart,
						opacity: 0,
					},
					{
						xPercent: 0,
						opacity: 1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: line,
							start: "top 90%",
						end: "top 40%",
							scrub: 1,
						},
					}
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const manifestoItems = [
		t("item1"),
		t("item2"),
		t("item3"),
		t("item4"),
	];

	return (
		<section
			ref={containerRef}
			className="border-y-4 border-black bg-black text-white py-24 px-6 overflow-hidden"
		>
			<div className="mb-16">
				<span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">
					{t("label")}
				</span>
			</div>
			<div className="flex flex-col gap-12">
				{manifestoItems.map((text, i) => (
					<div
						key={text}
						ref={(el) => {
							linesRef.current[i] = el;
						}}
						className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
					>
						<div className="border-l-4 border-primary pl-6 py-2 max-w-4/5">
							<p className="text-[clamp(3rem,8vw,6rem)] font-condensed font-black uppercase leading-[0.9]">
								{text}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
