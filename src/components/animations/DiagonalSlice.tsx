"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DiagonalSliceProps {
	imageSrc: string;
	alt: string;
}

export default function DiagonalSlice({ imageSrc, alt }: DiagonalSliceProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const wrapper = wrapperRef.current;
			const image = imageRef.current;
			if (!wrapper || !image) return;

			gsap.set(image, {
				clipPath: "polygon(0% 0%, 30% 0%, 0% 30%)",
			});

			gsap.to(image, {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				ease: "power2.out",
				scrollTrigger: {
					trigger: wrapper,
					start: "top 60%",
					end: "center center",
					scrub: 0.5,
				},
			});
		}, wrapperRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={wrapperRef} className="relative w-full aspect-[16/9] bg-black shadow-[8px_8px_0px_#000]">
			<div
				ref={imageRef}
				className="absolute inset-0"
				style={{
					backgroundImage: `url(${imageSrc})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={imageSrc} alt={alt} className="sr-only" />
		</div>
	);
}
