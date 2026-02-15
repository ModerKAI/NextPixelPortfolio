"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";

interface SmoothScrollProviderProps {
	children: ReactNode;
}

export default function SmoothScrollProvider({
	children,
}: SmoothScrollProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			touchMultiplier: 2,
		});

		lenisRef.current = lenis;

		lenis.on("scroll", ScrollTrigger.update);

		function raf(time: number) {
			lenis.raf(time * 1000);
			requestAnimationFrame(raf);
		}

		ScrollTrigger.scrollerProxy(document.documentElement, {
			scrollTop(value?: number) {
				if (arguments.length && value !== undefined) {
					lenis.scrollTo(value, { immediate: true });
				}
				return lenis.scroll;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
		});

		ScrollTrigger.defaults({ scroller: document.documentElement });

		const handleLoad = () => ScrollTrigger.refresh();
		window.addEventListener("load", handleLoad);

		requestAnimationFrame(raf);

		return () => {
			window.removeEventListener("load", handleLoad);
			lenis.destroy();
			ScrollTrigger.getAll().forEach((st) => st.kill());
			lenisRef.current = null;
		};
	}, []);

	return <>{children}</>;
}
