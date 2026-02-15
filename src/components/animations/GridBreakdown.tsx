"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GRID_COLS = 4;
const GRID_ROWS = 4;
const TOTAL_CELLS = GRID_COLS * GRID_ROWS;

interface GridBreakdownProps {
	imageSrc: string;
	alt: string;
}

export default function GridBreakdown({ imageSrc, alt }: GridBreakdownProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const cellsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		const container = containerRef.current;
		if (!wrapper || !container) return;

		const cells = cellsRef.current.filter(Boolean) as HTMLDivElement[];

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: "center center",
				end: "+=150%",
				scrub: 0.3,
				pin: true,
				pinSpacing: true,
			},
		});

		cells.forEach((cell, i) => {
			const row = Math.floor(i / GRID_COLS);
			const col = i % GRID_COLS;

			const centerX = (GRID_COLS - 1) / 2;
			const centerY = (GRID_ROWS - 1) / 2;
			const dirX = (col - centerX) * 200;
			const dirY = (row - centerY) * 160;

			const rotation = (Math.random() - 0.5) * 30;

			tl.to(
				cell,
				{
					x: dirX + (Math.random() - 0.5) * 80,
					y: dirY + (Math.random() - 0.5) * 60,
					rotation,
					scale: 0.5,
					opacity: 0,
					ease: "power3.in",
					duration: 1,
				},
				0
			);
		});

		return () => {
			tl.scrollTrigger?.kill();
			tl.kill();
		};
	}, []);

	return (
		<div ref={wrapperRef} className="relative w-full">
			<div ref={containerRef} className="relative w-full aspect-square md:aspect-4/3">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={imageSrc} alt={alt} className="sr-only" />

				<div
					className="absolute inset-0 grid"
					style={{
						gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
						gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
					}}
				>
					{Array.from({ length: TOTAL_CELLS }).map((_, i) => {
						const col = i % GRID_COLS;
						const row = Math.floor(i / GRID_COLS);

						return (
							<div
								key={i}
								ref={(el) => {
									cellsRef.current[i] = el;
								}}
								className="relative"
								style={{
									backgroundImage: `url(${imageSrc})`,
									backgroundSize: `${GRID_COLS * 100}% ${GRID_ROWS * 100}%`,
									backgroundPosition: `${(col / (GRID_COLS - 1)) * 100}% ${(row / (GRID_ROWS - 1)) * 100}%`,
								}}
							/>
						);
					})}
				</div>

				<div className="absolute bottom-4 left-4 bg-white border-brutal px-3 py-1 font-bold text-xs uppercase z-10">
					Showreel &apos;24
				</div>
			</div>
		</div>
	);
}
