"use client";

import {
	createContext,
	useContext,
	useRef,
	useCallback,
	useEffect,
	type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

const ROUTE_LABELS: Record<string, string> = {
	"/": "NEXTPIXEL",
	"/works": "WORKS",
	"/studio": "STUDIO",
	"/team": "TEAM",
	"/inquiry": "INQUIRY",
	"/careers": "CAREERS",
};

function labelFor(href: string) {
	if (ROUTE_LABELS[href]) return ROUTE_LABELS[href];
	if (href.startsWith("/works/")) {
		return href
			.split("/")
			.pop()!
			.replace(/-/g, " ")
			.toUpperCase();
	}
	return "NEXTPIXEL";
}

interface TransitionCtx {
	navigateTo: (href: string) => void;
}

const TransitionContext = createContext<TransitionCtx>({
	navigateTo: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({
	children,
}: {
	children: ReactNode;
}) {
	const router = useRouter();
	const pathname = usePathname();
	const routerRef = useRef(router);
	const pathnameRef = useRef(pathname);

	const curtainRef = useRef<HTMLDivElement>(null);
	const labelRef = useRef<HTMLSpanElement>(null);
	const isAnimating = useRef(false);

	useEffect(() => {
		routerRef.current = router;
		pathnameRef.current = pathname;
	});

	const navigateTo = useCallback((href: string) => {
		if (href === pathnameRef.current || isAnimating.current) return;
		isAnimating.current = true;

		const curtain = curtainRef.current;
		const label = labelRef.current;
		if (!curtain || !label) return;

		label.textContent = labelFor(href);

		curtain.style.transform = "translateX(-100%)";
		label.style.opacity = "0";
		label.style.transform = "scale(0.7)";

		curtain.getBoundingClientRect();

		gsap.to(curtain, {
			x: 0,
			xPercent: 0,
			duration: 0.5,
			ease: "power3.inOut",
			overwrite: true,
			onComplete: () => {
				gsap.to(label, {
					opacity: 1,
					scale: 1,
					duration: 0.25,
					ease: "power2.out",
					onComplete: () => {
						window.scrollTo(0, 0);
						routerRef.current.push(href);

						setTimeout(() => {
							gsap.to(label, {
								opacity: 0,
								scale: 1.15,
								duration: 0.2,
								ease: "power2.in",
								onComplete: () => {
									gsap.to(curtain, {
										xPercent: 100,
										duration: 0.5,
										ease: "power3.inOut",
										onComplete: () => {
											curtain.style.transform = "translateX(-100%)";
											gsap.set(curtain, { xPercent: -100, x: 0 });
											isAnimating.current = false;
										},
									});
								},
							});
						}, 400);
					},
				});
			},
		});
	}, []);

	return (
		<TransitionContext.Provider value={{ navigateTo }}>
			{children}

			<div
				ref={curtainRef}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 99999,
					backgroundColor: "#000",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					transform: "translateX(-100%)",
					pointerEvents: "none",
					willChange: "transform",
				}}
			>
				<span
					ref={labelRef}
					style={{
						color: "#fff",
						fontSize: "clamp(3rem, 8vw, 5rem)",
						fontWeight: 900,
						textTransform: "uppercase",
						letterSpacing: "0.05em",
						userSelect: "none",
						opacity: 0,
						fontFamily: "var(--font-condensed), sans-serif",
					}}
				/>
			</div>
		</TransitionContext.Provider>
	);
}
